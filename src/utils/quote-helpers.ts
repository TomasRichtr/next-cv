import {
  isError, isObject, has,
} from "lodash";

import {
  QuoteError, QUOTE_ERROR_KEYS,
} from "@/types/quote";

export const createQuoteError = (
  translationKey: string,
  translationParams?: Record<string, string | number>,
): QuoteError => ({
  translationKey,
  ...(translationParams && {
    translationParams,
  }),
});

export const createHttpError = (status: number, message: string): QuoteError =>
  createQuoteError(QUOTE_ERROR_KEYS.HTTP_ERROR, {
    status,
    message,
  });

export const createFetchError = (error: unknown): QuoteError => {
  if (isError(error)) {
    return createQuoteError(QUOTE_ERROR_KEYS.FETCH_FAILED, {
      message: error.message,
    });
  }
  return createQuoteError(QUOTE_ERROR_KEYS.UNKNOWN_ERROR);
};

export const isQuoteError = (obj: unknown): obj is QuoteError =>
  isObject(obj) && has(obj, "translationKey");
