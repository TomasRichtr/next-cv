import {
  i18nRouter,
} from "next-i18n-router";

import i18nConfig from "@/utils/locales/i18n.config";

export const middleware = (request: never) => {
  return i18nRouter(request, i18nConfig);
};

export const config = {
  matcher: "/((?!api|static|.*\\\\..*|_next).*)",
};
