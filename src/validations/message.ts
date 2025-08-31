import Joi from "joi";

import {
  NewMessage,
} from "@/types/message";

export const validateNewMessage = async (message: NewMessage) => {
  const errorKeyMap = {
    "string.email": "validation.email.invalid",
    "any.required": "validation.required",
    "string.min": "validation.minLength",
    "string.max": "validation.maxLength",
    "string.pattern.base": "validation.phone.invalid",
  };

  try {
    await Joi.object({
      name: Joi.string().min(2).max(100).required(),
      email: Joi.string().email().required(),
      company_name: Joi.string().max(100).optional().allow("", null),
      phone: Joi.string().pattern(/^(\+)?[\d]+(\s[\d]+)*$/).max(20).optional().allow("", null),
      message: Joi.string().min(10).max(2000).required(),
      user_id: Joi.number().optional().allow(null),
    }).validateAsync(message);
  } catch (error: unknown) {
    if (error && typeof error === "object" && "isJoi" in error && error.isJoi) {
      const joiError = error as unknown as { details: Array<{ message: string; path: Array<string>; type: string }> };
      const errorDetail = joiError.details[0];
      const field = errorDetail.path[0];

      let translationKey = errorKeyMap[errorDetail.type as keyof typeof errorKeyMap];

      if (errorDetail.type === "any.required") {
        if (field === "name") {
          translationKey = "validation.name.required";
        } else if (field === "email") {
          translationKey = "validation.email.required";
        } else if (field === "message") {
          translationKey = "validation.message.required";
        }
      } else if (errorDetail.type === "string.max") {
        if (field === "company_name") {
          translationKey = "validation.companyName.maxLength";
        }
      } else if (errorDetail.type === "string.min") {
        if (field === "message") {
          translationKey = "validation.message.minLength";
        } else if (field === "name") {
          translationKey = "validation.name.minLength";
        }
      } else if (errorDetail.type === "string.pattern.base") {
        if (field === "phone") {
          translationKey = "validation.phone.invalid";
        }
      }

      const validationError = new Error(translationKey || errorDetail.message) as Error & { field: string };
      validationError.field = field;
      throw validationError;
    }
    throw error;
  }
};
