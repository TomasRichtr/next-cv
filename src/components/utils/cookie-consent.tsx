"use client";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import {
  useParams, useRouter,
} from "next/navigation";
import {
  useEffect, useRef,
} from "react";
import * as VanillaCookieConsent from "vanilla-cookieconsent";

import {
  COOKIE_CATEGORIES,
} from "@/constants/cookies";
import {
  LOCALES,
} from "@/constants/locales";
import {
  CZECH_LOCALES,
} from "@/locales/cs/cookies";
import {
  ENGLISH_LOCALES,
} from "@/locales/en/cookies";
import {
  useAppDispatch,
} from "@/store/hooks";
import {
  setCookieConsent,
} from "@/store/slices/appSlice";

const CookieConsent = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const currentLocale = params.locale as string;
  const router = useRouter();
  const isInitialized = useRef(false);

  useEffect(() => {
    const handleConsentCookiesChange = () => {
      const authConsent = VanillaCookieConsent.acceptedCategory("authentication");
      const prefConsent = VanillaCookieConsent.acceptedCategory("preferences");
      dispatch(setCookieConsent({
        authentication: authConsent,
        preferences: prefConsent,
      }));
      router.refresh();
    };

    let currentAuthConsent = false;
    let currentPrefConsent = false;

    if (isInitialized.current) {
      try {
        currentAuthConsent = VanillaCookieConsent.acceptedCategory("authentication");
        currentPrefConsent = VanillaCookieConsent.acceptedCategory("preferences");
        VanillaCookieConsent.reset(false);
      } catch (error) {
        console.error("Failed to reset consent cookies:", error);
        VanillaCookieConsent.reset(true);
      }
    }

    VanillaCookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom right",
          flipButtons: false,
          equalWeightButtons: true,
        },
        preferencesModal: {
          layout: "box",
          flipButtons: false,
          equalWeightButtons: true,
        },
      },

      categories: {
        authentication: {
          enabled: true,
          readOnly: true,
        },
        preferences: {
          enabled: true,
        },
      },

      language: {
        default: currentLocale || LOCALES[0],
        translations: {
          en: ENGLISH_LOCALES,
          cs: CZECH_LOCALES,
        },
      },

      onFirstConsent: () => {
        handleConsentCookiesChange();
      },

      onChange: () => {
        handleConsentCookiesChange();
      },
    });

    if (isInitialized.current && (currentAuthConsent || currentPrefConsent)) {
      setTimeout(() => {
        if (currentAuthConsent) {
          VanillaCookieConsent.acceptCategory("authentication");
        }
        if (currentPrefConsent) {
          VanillaCookieConsent.acceptCategory("preferences");
        }
      }, 50);
    }

    isInitialized.current = true;

    setTimeout(() => {
      const authConsent = VanillaCookieConsent.acceptedCategory(COOKIE_CATEGORIES.AUTHENTICATION);
      const prefConsent = VanillaCookieConsent.acceptedCategory(COOKIE_CATEGORIES.PREFERENCES);
      dispatch(setCookieConsent({
        authentication: authConsent,
        preferences: prefConsent,
      }));
    }, 100);

    return () => {};
  }, [
    dispatch,
    currentLocale,
    router,
  ]);

  return null;
};

export default CookieConsent;
