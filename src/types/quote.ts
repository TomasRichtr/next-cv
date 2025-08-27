export interface QuoteError {
  translationKey: string;
  translationParams?: Record<string, string | number>;
}

export interface QuoteApiResponse {
  error?: QuoteError;
}

export const QUOTE_ERROR_KEYS = {
  HTTP_ERROR: "quote.errors.httpError",
  NO_QUOTE: "quote.errors.noQuote", 
  FETCH_FAILED: "quote.errors.fetchFailed",
  UNKNOWN_ERROR: "quote.errors.unknownError",
} as const;
