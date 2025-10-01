"use client";

import {
  get, isEmpty,
} from "lodash";
import {
  useCallback, useEffect, useState,
} from "react";
import {
  useTranslation,
} from "react-i18next";

import Card from "@/components/utils/card";
import Loader from "@/components/utils/loader";
import {
  Quote,
} from "@/types/error";
import {
  QUOTE_ERROR_KEYS, QuoteApiResponse, QuoteError,
} from "@/types/quote";
import {
  Sizes,
} from "@/types/theme";
import {
  createQuoteError, isQuoteError,
} from "@/utils/quote-helpers";

const ErrorCard = () => {
  const [
    quote, setQuote,
  ] = useState<Quote | null>(null);
  const [
    loading, setLoading,
  ] = useState(true);
  const [
    error, setError,
  ] = useState<QuoteError | null>(null);
  const {
    t,
  } = useTranslation();

  const handleApiError = useCallback((errorData: QuoteApiResponse) => {
    const apiError = get(errorData, "error");
    if (isQuoteError(apiError)) {
      setError(apiError);
    } else {
      setError(createQuoteError(QUOTE_ERROR_KEYS.UNKNOWN_ERROR));
    }
  }, []);

  const fetchQuote = useCallback(async () => {
    try {
      const response = await fetch("/api/quote");
      const data = await response.json();

      if (get(data, "error")) {
        handleApiError(data);
        return;
      }

      setQuote(data);
    } catch {
      setError(createQuoteError(QUOTE_ERROR_KEYS.UNKNOWN_ERROR));
    } finally {
      setLoading(false);
    }
  }, [handleApiError]);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  const renderError = useCallback(() => {
    if (!error) return null;

    const errorMessage = error.translationParams
      ? t(error.translationKey, error.translationParams)
      : t(error.translationKey);

    return (
      <div
        className="text-red-500"
      >
        {t("error.title")}
        :
        {errorMessage}
      </div>
    );
  }, [
    error,
    t,
  ]);

  const renderQuote = useCallback(() => {
    if (!quote || isEmpty(quote)) return null;

    return (
      <Card
        className="space-y-2"
      >
        <blockquote
          className="text-lg italic"
        >
          &#34;
          {quote.q}
          &#34;
        </blockquote>
        <cite
          className="text-sm text-gray-600"
        >
          —
          {" "}
          {quote.a}
        </cite>
      </Card>
    );
  }, [quote]);

  if (loading) {
    return (
      <Loader
        size={Sizes.XL}
      />
    );
  }

  return error ? renderError() : renderQuote();
};

export default ErrorCard;
