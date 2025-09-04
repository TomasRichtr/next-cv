"use client";

import {
  ChangeEvent,
  useEffect,
  useState,
} from "react";

import RadioButton from "@/components/forms/inputs/radio-button";
import WithSkeleton from "@/components/layout/with-skeleton";
import {
  useCookieStorage,
} from "@/hooks/useCookieStorage";

const THEME_MODES = {
  auto: "auto",
  manual: "manual",
} as const;

const THEME = {
  light: "bumblebee",
  dark: "abyss",
} as const;

type Theme = typeof THEME[keyof typeof THEME];

const ThemePicker = () => {
  const [currentTheme, setCurrentTheme] = useCookieStorage("theme", "auto", true);
  const [manualTheme, setManualTheme] = useCookieStorage<Theme>("manualTheme", THEME.light, true);
  const [systemTheme, setSystemTheme] = useState<Theme>(THEME.light);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => {
      setSystemTheme(mediaQuery.matches ? THEME.dark : THEME.light);
    };

    updateSystemTheme();

    mediaQuery.addEventListener("change", updateSystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateSystemTheme);
    };
  }, []);

  useEffect(() => {
    if (currentTheme === "auto") {
      document.documentElement.setAttribute("data-theme", systemTheme);
    } else {
      document.documentElement.setAttribute("data-theme", manualTheme);
    }
  }, [currentTheme, manualTheme, systemTheme]);

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.value;
    if (currentTheme === newTheme) return;

    if (newTheme === THEME_MODES.auto) {
      setCurrentTheme(THEME_MODES.auto);
      document.documentElement.setAttribute("data-theme", systemTheme);
    } else {
      setCurrentTheme(THEME_MODES.manual);
      document.documentElement.setAttribute("data-theme", manualTheme);
    }
  };

  const handleManualToggle = () => {
    if (currentTheme === THEME_MODES.auto) {
      const oppositeTheme = systemTheme === THEME.dark ? THEME.light : THEME.dark;
      setManualTheme(oppositeTheme);
      setCurrentTheme(THEME_MODES.manual);
      document.documentElement.setAttribute("data-theme", oppositeTheme);
    } else {
      const newManualTheme = manualTheme === THEME.light ? THEME.dark : THEME.light;
      setManualTheme(newManualTheme);
      document.documentElement.setAttribute("data-theme", newManualTheme);
    }
  };

  const getIcon = (theme: string) => {
    if (theme === THEME_MODES.auto) {
      return "icon-[tabler--brightness-auto]";
    }

    const themeToShow = currentTheme === THEME_MODES.auto
      ? (systemTheme === THEME.dark ? THEME.light : THEME.dark)
      : manualTheme;

    return themeToShow === THEME.dark ? "icon-[tabler--moon]" : "icon-[tabler--sun]";
  };

  const buildManualButtonClass = () => {
    const baseClasses = "join-item btn btn-square w-14";
    const activeClasses = currentTheme === THEME_MODES.manual ? "btn-primary text-primary-content" : "btn-soft text-primary";
    return `${activeClasses} ${baseClasses}`;
  };

  return (
    <WithSkeleton
      widthClass="w-42"
    >
      <div
        className="join drop-shadow"
      >
        <RadioButton
          name="theme-picker"
          selectedValue={currentTheme}
          value={THEME_MODES.auto}
          label="auto theme"
          radioChangeHandler={handleThemeChange}
        >
          <span
            className={`${getIcon(THEME_MODES.auto)} size-6`}
          />
        </RadioButton>
        <button
          className={buildManualButtonClass()}
          onClick={handleManualToggle}
          aria-label={`${manualTheme} theme`}
          type="button"
        >
          <span
            className={`${getIcon(THEME_MODES.manual)} size-6`}
          />
        </button>
      </div>
    </WithSkeleton>
  );
};

export default ThemePicker;
