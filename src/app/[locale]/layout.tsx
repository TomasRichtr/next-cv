import "../globals.css";
import "devicon/devicon.min.css";
import {
  Ubuntu,
} from "next/font/google";
import {
  cookies,
} from "next/headers";
import React, {
  ReactNode,
} from "react";

import MainFooter from "@/components/footer/main-footer";
import HeaderDrawer from "@/components/header/header-drawer";
import MainHeader from "@/components/header/main-header";
import FlyonuiScript from "@/components/providers/flyonui-script";
import ReduxProvider from "@/components/providers/redux-provider";
import TranslationProvider from "@/components/providers/translation-provider";
import CookieConsent from "@/components/utils/cookie-consent";
import {
  APP_NAME,
} from "@/constants";
import {
  verifyAuthSession,
} from "@/db/auth";
import initTranslations from "@/locales/i18n";
import {
  AsyncParams,
} from "@/types";
import {
  Theme, ThemeMode,
} from "@/types/theme";

const font = Ubuntu({
  weight: "500",
  subsets: ["latin-ext"],
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

  const getInitialTheme = async () => {
    "use server";
    const cookieStore = await cookies();
    const themeCookie = cookieStore.get(`${APP_NAME}:theme`)?.value;
    const manualThemeCookie = cookieStore.get(`${APP_NAME}:manualTheme`)?.value;

    let currentTheme = ThemeMode.Auto;
    let manualTheme = Theme.Light;

    try {
      if (themeCookie) {
        currentTheme = JSON.parse(themeCookie);
      }
      if (manualThemeCookie) {
        manualTheme = JSON.parse(manualThemeCookie);
      }
    } catch (error) {
      console.error("Error parsing theme cookies:", error);
    }

    if (currentTheme === ThemeMode.Manual) {
      return manualTheme;
    }

    return null;
  };

  const initialTheme = await getInitialTheme();

  return (
    <html
      lang={locale}
      data-theme={initialTheme || "bumblebee"}
    >
      <body
        className={`${font.className} font-sans`}
      >
        <FlyonuiScript />
        <ReduxProvider>
          <CookieConsent />
          <TranslationProvider
            locale={locale}
            resources={resources}
          >
            <HeaderDrawer
              t={t}
              userId={user?.id}
            />
            <div>
              <MainHeader
                t={t}
                userId={user?.id}
              />
              <main
                className="relative overflow-x-hidden"
              >
                {children}
              </main>
              <MainFooter
                t={t}
              />
            </div>
          </TranslationProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
