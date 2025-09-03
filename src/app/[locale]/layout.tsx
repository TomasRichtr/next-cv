import "../globals.css";
import React, {
  ReactNode,
} from "react";

import HeaderDrawer from "@/components/header/header-drawer";
import MainHeader from "@/components/header/main-header";
import FlyonuiScript from "@/components/providers/flyonui-script";
import TranslationsProvider from "@/components/providers/translationsProvider";
import {
  verifyAuthSession,
} from "@/db/auth";
import initTranslations from "@/locales/i18n";
import ReduxProvider from "@/store/providers";
import {
  AsyncParams,
} from "@/types";

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
      <body>
        <FlyonuiScript />
        <ReduxProvider>
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
            </div>
          </TranslationsProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
