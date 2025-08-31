"use server";

import {
  SqliteError,
} from "better-sqlite3";
import {
  redirect,
} from "next/navigation";

import {
  ROUTE,
} from "@/constants/route";
import {
  createMessage,
} from "@/db/dao/message";
import {
  DbErrorCode,
} from "@/types/error";
import {
  NewMessage,
} from "@/types/message";
import {
  sendEmail,
} from "@/utils/email";
import {
  buildAdminEmail,
  buildUserEmail,
} from "@/utils/message";
import {
  validateNewMessage,
} from "@/validations/message";

const extractFormData = (formData: FormData, fields: string[]) => {
  return fields.reduce((acc, field) => {
    const value = formData.get(field) as string;
    acc[field] = value === "" ? undefined : value;
    return acc;
  }, {} as Record<string, string | undefined>);
};

const createErrorResponse = (
  message: string, field: string | undefined, messageData: Record<string, string | undefined>,
) => ({
  message,
  field,
  data: messageData,
});

export const submitMessage = async (
  locale: string,
  userId: number | undefined,
  prevState: {
    message?: string;
    field?: string;
    data?: {
      name?: string;
      email?: string;
      company_name?: string;
      phone?: string;
      message?: string;
    };
  } | undefined,
  formData: FormData,
) => {
  const messageFields = ["name", "email", "company_name", "phone", "message"];
  const messageData = extractFormData(formData, messageFields);
  const newMessage: NewMessage = {
    name: messageData.name,
    email: messageData.email,
    company_name: messageData.company_name || null,
    phone: messageData.phone || null,
    message: messageData.message,
    user_id: userId,
  };

  let redirectPath;
  try {
    await validateNewMessage(newMessage);
    const messageId = createMessage(newMessage);

    const adminEmail = buildAdminEmail(locale, messageId, newMessage);
    const adminMailOptions = {
      from: process.env.EMAIL_LOGIN!,
      to: "t.richtr@email.cz",
      subject: adminEmail.subject,
      text: adminEmail.text,
    };

    const userEmail = buildUserEmail(locale, newMessage);
    const userMailOptions = {
      from: process.env.EMAIL_LOGIN!,
      to: newMessage.email!,
      subject: userEmail.subject,
      text: userEmail.text,
    };

    await Promise.all([
      sendEmail(adminMailOptions),
      sendEmail(userMailOptions),
    ]);
    redirectPath = `${ROUTE.CONTACT}?success=true`;
  } catch (err) {
    if (!(err instanceof Error) || !err.message) {
      throw err;
    }

    if (err instanceof SqliteError && err.code === DbErrorCode.UNIQUE) {
      return createErrorResponse(
        "validation.message.duplicate",
        undefined,
        messageData,
      );
    }

    return createErrorResponse(
      err.message,
      (err as Error & { field?: string }).field,
      messageData,
    );
  } finally {
    if (redirectPath) {
      redirect(redirectPath);
    }
  }
};
