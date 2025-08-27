import {
  head,
  isEmpty,
} from "lodash";
import {
  NextResponse,
} from "next/server";

import {
  QUOTE_ERROR_KEYS,
} from "@/types/quote";
import {
  createHttpError,
  createFetchError,
  createQuoteError,
} from "@/utils/quote-helpers";

const ZENQUOTES_API_URL = "https://zenquotes.io/api/random";

export const GET = async () => {
  try {
    const response = await fetch(ZENQUOTES_API_URL);
    const quotes = await response.json();

    if (!response.ok) {
      const error = createHttpError(response.status, response.statusText);
      return NextResponse.json(
        {
          error,
        },
        {
          status: response.status,
        },
      );
    }

    const quote = head(quotes);

    if (isEmpty(quote)) {
      const error = createQuoteError(QUOTE_ERROR_KEYS.NO_QUOTE);
      return NextResponse.json(
        {
          error,
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json(quote);
  } catch (error) {
    console.error("Failed to fetch quote:", error);

    const errorResponse = createFetchError(error);
    return NextResponse.json(
      {
        error: errorResponse,
      },
      {
        status: 500,
      },
    );
  }
};
