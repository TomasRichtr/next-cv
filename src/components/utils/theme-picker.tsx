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
import {
  Theme, ThemeMode,
} from "@/types/theme";

const ThemePicker = () => {
  const [currentTheme, setCurrentTheme] = useCookieStorage("theme", "auto", true);
  const [manualTheme, setManualTheme] = useCookieStorage<Theme>("manualTheme", Theme.Light, true);
  const [systemTheme, setSystemTheme] = useState<Theme>(Theme.Light);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => {
      setSystemTheme(mediaQuery.matches ? Theme.Dark : Theme.Light);
    };

    updateSystemTheme();

    mediaQuery.addEventListener("change", updateSystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateSystemTheme);
    };
  }, []);

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.value;
    if (currentTheme === newTheme) return;

    if (newTheme === ThemeMode.Auto) {
      setCurrentTheme(ThemeMode.Auto);
      document.documentElement.setAttribute("data-theme", systemTheme);
    } else {
      setCurrentTheme(ThemeMode.Manual);
      document.documentElement.setAttribute("data-theme", manualTheme);
    }
  };

  const handleManualToggle = () => {
    if (currentTheme === ThemeMode.Auto) {
      const oppositeTheme = systemTheme === Theme.Dark ? Theme.Light : Theme.Dark;
      setManualTheme(oppositeTheme);
      setCurrentTheme(ThemeMode.Manual);
      document.documentElement.setAttribute("data-theme", oppositeTheme);
    } else {
      const newManualTheme = manualTheme === Theme.Light ? Theme.Dark : Theme.Light;
      setManualTheme(newManualTheme);
      document.documentElement.setAttribute("data-theme", newManualTheme);
    }
  };

  const getIcon = (theme: string) => {
    if (theme === ThemeMode.Auto) {
      return "icon-[tabler--brightness-auto]";
    }

    const themeToShow = currentTheme === ThemeMode.Auto
      ? (systemTheme === Theme.Dark ? Theme.Light : Theme.Dark)
      : manualTheme;

    return themeToShow === Theme.Dark ? "icon-[tabler--moon]" : "icon-[tabler--sun]";
  };

  const buildManualButtonClass = () => {
    const baseClasses = "join-item btn btn-square w-14";
    const activeClasses = currentTheme === ThemeMode.Manual ? "btn-primary text-primary-content" : "btn-soft text-primary";
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
          value={ThemeMode.Auto}
          label="auto theme"
          radioChangeHandler={handleThemeChange}
        >
          <span
            className={`${getIcon(ThemeMode.Auto)} size-6`}
          />
        </RadioButton>
        <button
          className={buildManualButtonClass()}
          onClick={handleManualToggle}
          aria-label={`${manualTheme} theme`}
          type="button"
        >
          <span
            className={`${getIcon(ThemeMode.Manual)} size-6`}
          />
        </button>
      </div>
    </WithSkeleton>
  );
};

export default ThemePicker;
