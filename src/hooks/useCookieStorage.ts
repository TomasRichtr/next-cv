"use client";

import {
  useEffect, useState,
} from "react";

import {
  APP_NAME,
} from "@/constants";
import {
  useAppSelector,
} from "@/store/hooks";

export const useCookieStorage = <T>(key: string, defaultValue: T, requiresConsent: boolean = true) => {
  const [value, setValue] = useState<T>(defaultValue);
  const prefixedKey = `${APP_NAME}:${key}`;
  const {
    cookieConsent,
  } = useAppSelector((state) => state.app);

  useEffect(() => {
    if (!cookieConsent.isLoaded) return;

    try {
      const cookieValue = getCookie(prefixedKey);
      if (cookieValue !== null) {
        setValue(JSON.parse(cookieValue));
      }
    } catch (error) {
      console.warn(`Error reading cookie "${prefixedKey}":`, error);
    }
  }, [prefixedKey, cookieConsent.isLoaded]);

  const setStoredValue = (newValue: T) => {
    try {
      setValue(newValue);

      // Only store in cookie if consent is given or consent is not required
      if (!requiresConsent || cookieConsent.preferences) {
        setCookie(prefixedKey, JSON.stringify(newValue));
      }
    } catch (error) {
      console.warn(`Error setting cookie "${prefixedKey}":`, error);
    }
  };

  return [value, setStoredValue] as const;
};

export const removeFromCookieStorage = (key: string) => {
  const prefixedKey = `${APP_NAME}:${key}`;
  try {
    deleteCookie(prefixedKey);
  } catch (error) {
    console.warn(`Error removing cookie "${prefixedKey}":`, error);
  }
};

export const getFromCookieStorage = <T>(key: string, defaultValue: T): T => {
  const prefixedKey = `${APP_NAME}:${key}`;
  try {
    const cookieValue = getCookie(prefixedKey);
    return cookieValue !== null ? JSON.parse(cookieValue) : defaultValue;
  } catch (error) {
    console.warn(`Error reading cookie "${prefixedKey}":`, error);
    return defaultValue;
  }
};

// Helper functions for cookie operations
const setCookie = (name: string, value: string, days: number = 21) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

const getCookie = (name: string): string | null => {
  const nameEQ = `${name }=`;
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};
