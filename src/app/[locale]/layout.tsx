import "../globals.css";
import "devicon/devicon.min.css";
import {
  Ubuntu,
} from "next/font/google";
import React, {
  ReactNode,
} from "react";

import MainFooter from "@/components/footer/main-footer";
import HeaderDrawer from "@/components/header/header-drawer";
import MainHeader from "@/components/header/main-header";
import FlyonuiScript from "@/components/providers/flyonui-script";
import TranslationsProvider from "@/components/providers/translationsProvider";
import CookieConsent from "@/components/utils/cookie-consent";
import {
  verifyAuthSession,
} from "@/db/auth";
import initTranslations from "@/locales/i18n";
import ReduxProvider from "@/store/providers";
import {
  AsyncParams,
} from "@/types";

const inter = Ubuntu({
  weight: "500",
});

export const generateMetadata = async ({
  params,
}: AsyncParams) => {
  const {
    locale,
  } = await params;

  const {
    t,
  } = await initTranslations(locale);

  return {
    title: t("seoTitle"),
    description: t("seoDescription"),
  };
};

const RootLayout = async ({
  children, params,
}: {children: ReactNode} & AsyncParams) => {
  const {
    locale,
  } = await params;

  const {
    resources, t,
  } = await initTranslations(locale);

  const {
    user,
  } = await verifyAuthSession();

  return (
    <html
      lang={locale}
    >
      <body
        className={`${inter.className} font-sans`}
      >
        <FlyonuiScript />
        <ReduxProvider>
          <CookieConsent />
          <TranslationsProvider
            locale={locale}
            resources={resources}
          >
            <HeaderDrawer
              t={t}
              userId={user?.id}
            />
            <div
              className="min-h-screen"
            >
              <MainHeader
                t={t}
                userId={user?.id}
              />
              <main
                className="relative"
              >
                {children}
              </main>

              <MainFooter
                t={t}
              />
            </div>
          </TranslationsProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
