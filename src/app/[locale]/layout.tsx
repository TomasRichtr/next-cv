import "../globals.css";
import React, {
  ReactNode,
} from "react";

import Header from "@/components/header/header";
import FlyonuiScript from "@/components/providers/flyonui-script";
import TranslationsProvider from "@/components/providers/translationsProvider";
import initTranslations from "@/locales/i18n";
import ReduxProvider from "@/store/providers";
import {
  LocaleParam,
} from "@/types";

export const generateMetadata = async ({
  params,
}: LocaleParam) => {
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
}: {children: ReactNode} & LocaleParam) => {
  const {
    locale,
  } = await params;

  const {
    resources, t,
  } = await initTranslations(locale);

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
            <div
              className="min-h-screen bg-background"
            >
              <Header
                t={t}
              />
              <main>
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
