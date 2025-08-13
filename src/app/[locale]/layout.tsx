import "./globals.css";
import React, {
  ReactNode,
} from "react";

import Header from "@/components/layout/header";
import TranslationsProvider from "@/components/translationsProvider";
import {
  NAMESPACE,
} from "@/constants/locales";
import {
  LocaleParam,
} from "@/types";
import initTranslations from "@/utils/locales/i18n";

export const generateMetadata = async ({
  params,
}: LocaleParam) => {
  const {
    locale,
  } = await params;

  const {
    t,
  } = await initTranslations(locale, [NAMESPACE.COMMON]);

  return {
    title: t("seoTitle"),
    description: t("seoDescription"),
  };
};

export default async function RootLayout({
  children, params,
}: {children: ReactNode} & LocaleParam) {
  const {
    locale,
  } = await params;

  const {
    resources,
  } = await initTranslations(locale);

  return (
    <html
      lang={locale}
    >
      <body>
        <TranslationsProvider
          locale={locale}
          resources={resources}
        >
          <Header />
          <main>
            {children}
          </main>
        </TranslationsProvider>
      </body>
    </html>
  );
}
