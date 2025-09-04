import {
  NextRequest, NextResponse,
} from "next/server";
import {
  i18nRouter,
} from "next-i18n-router";

import i18nConfig from "@/locales/i18n.config";

const sanitizeLocaleCookie = (request: NextRequest, response: NextResponse) => {
  const consentCookie = request.cookies.get("cc_cookie")?.value;

  let storeLocale = false;

  if (consentCookie) {
    const {
      categories,
    } = JSON.parse(consentCookie);
    storeLocale = categories.includes("preferences");
  }

  if (!storeLocale && response.cookies.get("NEXT_LOCALE")) {
    response.cookies.delete("NEXT_LOCALE");
  }
};

export const middleware = (request: NextRequest) => {
  const response = i18nRouter(request, i18nConfig);

  sanitizeLocaleCookie(request, response);

  return response;

};

export const config = {
  matcher: "/((?!api|static|.*\\\\..*|_next).*)",
};
