"use client";

import {
  useEffect, useState,
} from "react";

import {
  APP_NAME,
} from "@/constants";


export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue);

  const prefixedKey = `${APP_NAME}:${key}`;

  useEffect(() => {
    try {
      const item = localStorage.getItem(prefixedKey);
      if (item !== null) {
        setValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Error reading localStorage key "${prefixedKey}":`, error);
    }
  }, [prefixedKey]);

  const setStoredValue = (newValue: T) => {
    try {
      setValue(newValue);
      localStorage.setItem(prefixedKey, JSON.stringify(newValue));
    } catch (error) {
      console.warn(`Error setting localStorage key "${prefixedKey}":`, error);
    }
  };

  return [value, setStoredValue] as const;
};

export const removeFromLocalStorage = (key: string) => {
  const prefixedKey = `${APP_NAME}:${key}`;
  try {
    localStorage.removeItem(prefixedKey);
  } catch (error) {
    console.warn(`Error removing localStorage key "${prefixedKey}":`, error);
  }
};

export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  const prefixedKey = `${APP_NAME}:${key}`;
  try {
    const item = localStorage.getItem(prefixedKey);
    return item !== null ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(`Error reading localStorage key "${prefixedKey}":`, error);
    return defaultValue;
  }
};
