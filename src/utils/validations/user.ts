import Joi from "joi";

import {
  FormFields,
  NewUser,
} from "@/types/user";

export const validateNew = async (user: NewUser & { confirmPassword?: string }) => {
  const errorKeyMap = {
    "string.email": "validation.email.invalid",
    "any.required": "validation.email.required",
    "string.min": "validation.password.minLength",
    "string.max": "validation.password.maxLength",
    "string.pattern.base": "password.strength.description",
    "any.only": "validation.confirmPassword.match",
  };

  try {
    await Joi.object({
      [FormFields.Email]: Joi.string().email().required(),
      [FormFields.Password]: Joi.string().min(8).max(128).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&!@_])/).required(),
      [FormFields.ConfirmPassword]: Joi.string().valid(Joi.ref(FormFields.Password)).required(),
    }).validateAsync(user);
  } catch (error: unknown) {
    if (error && typeof error === "object" && "isJoi" in error && error.isJoi) {
      const joiError = error as unknown as { details: Array<{ message: string; path: Array<string>; type: string }> };
      const errorDetail = joiError.details[0];
      const field = errorDetail.path[0];

      let translationKey = errorKeyMap[errorDetail.type as keyof typeof errorKeyMap];

      if (errorDetail.type === "any.required") {
        if (field === "password") {
          translationKey = "validation.password.required";
        } else if (field === "confirmPassword") {
          translationKey = "validation.confirmPassword.required";
        }
      }

      const validationError = new Error(translationKey || errorDetail.message) as Error & { field: string };
      validationError.field = field;
      throw validationError;
    }
    throw error;
  }
};
