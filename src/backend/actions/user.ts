"use server";

import {
  SqliteError,
} from "better-sqlite3";
import {
  pick,
} from "lodash";
import {
  redirect,
} from "next/navigation";

import {
  createAuthSession, destroyAuthSession,
} from "@/backend/db/auth";
import {
  createUser, getUserByEmail,
} from "@/backend/db/user";
import {
  ROUTE,
} from "@/constants/route";
import {
  DbErrorCode,
} from "@/types/error";
import {
  FormFields,
  LoginMode,
  NewUser, User,
} from "@/types/user";
import {
  verifyPassword,
} from "@/utils/hash";
import {
  validateNew,
} from "@/utils/validations/user";

const extractFormData = (formData: FormData, fields: string[]) => {
  return fields.reduce((acc, field) => {
    acc[field] = formData.get(field) as string;
    return acc;
  }, {} as Record<string, string>);
};

const createErrorResponse = (
  message: string, field: string | undefined, userData: Record<string, string>,
) => ({
  message,
  field,
  data: userData,
});

const handleAuthFlow = async (
  authAction: () => Promise<void>,
  userData: Record<string, string>,
  onError?: (err: Error) => { message: string; field: string } | null,
) => {
  let redirectPath;
  try {
    await authAction();
    redirectPath = ROUTE.USER;
  } catch (err) {
    if (!(err instanceof Error) || !err.message) {
      throw err;
    }

    const customError = onError?.(err);
    if (customError) {
      return createErrorResponse(customError.message, customError.field, userData);
    }

    return createErrorResponse(
      err.message,
      (err as Error & { field?: string }).field,
      userData,
    );
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
};

export const signUp = async (
  prevState: {
    message?: string;
    field?: string;
    data?: {
      email?: string;
      password?: string;
      confirmPassword?: string;
    };
  } | undefined,
  formData: FormData,
) => {
  const signupFields = [FormFields.Email, FormFields.Password, FormFields.ConfirmPassword];
  const userData = extractFormData(formData, signupFields);
  const user: NewUser = userData as unknown as NewUser;

  return handleAuthFlow(
    async () => {
      await validateNew(user);
      const userId = createUser(
          pick(
            user, [FormFields.Email, FormFields.Password]) as { email: string; password: string },
      );
      await createAuthSession(String(userId));
    },
    userData,
    (err) => {
      if (err instanceof SqliteError && err.code === DbErrorCode.UNIQUE) {
        return {
          message: "validation.email.exists",
          field: FormFields.Email,
        };
      }
      return null;
    },
  );
};

export const login = async (
  prevState: {
      message?: string;
      data?: {
        email?: string;
        password?: string;
      };
    } | undefined,
  formData: FormData,
) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const loginFields = [FormFields.Email, FormFields.Password];
  const userData = extractFormData(formData, loginFields);
  const user: Omit<User, "id"> = userData as unknown as Omit<User, "id">;

  return handleAuthFlow(
    async () => {
      const existingUser = getUserByEmail(user.email);
      if (!existingUser) {
        const error = new Error("validation.email.notFound") as Error & { field: string };
        error.field = FormFields.Email;
        throw error;
      }

      const isPasswordMatching = verifyPassword(existingUser.password, user.password);
      if (!isPasswordMatching) {
        const error = new Error("validation.password.incorrect") as Error & { field: string };
        error.field = FormFields.Password;
        throw error;
      }

      await createAuthSession(String(existingUser.id));
    },
    userData,
  );
};

export const auth = async (
  mode: LoginMode,
  prevState: {
  message?: string;
  data?: {
    email?: string;
    password?: string;
  }} | undefined,
  formData: FormData,
) => {
  if (mode === LoginMode.Signup) {
    return signUp(prevState, formData);
  } else {
    return login(prevState, formData);
  }
};

export const logout = async () => {
  await destroyAuthSession();
  redirect(ROUTE.HOME);
};
