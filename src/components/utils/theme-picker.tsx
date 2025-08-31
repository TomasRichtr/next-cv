"use client";

import {
  ChangeEvent,
  useEffect,
  useState,
} from "react";

import RadioButton from "@/components/forms/inputs/radio-button";
import WithSkeleton from "@/components/layout/with-skeleton";
import {
  useLocalStorage,
} from "@/utils/useLocaleStorage";

const THEMES = {
  auto: "auto",
  manual: "manual",
} as const;

const ThemePicker = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme", "auto");
  const [manualTheme, setManualTheme] = useLocalStorage("manualTheme", "light");
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
    };

    updateSystemTheme();

    mediaQuery.addEventListener("change", updateSystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateSystemTheme);
    };
  }, []);

  useEffect(() => {
    if (currentTheme === "auto") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", manualTheme);
    }
  }, [currentTheme, manualTheme]);

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.value;
    if (currentTheme === newTheme) return;

    if (newTheme === THEMES.auto) {
      setCurrentTheme(THEMES.auto);
      document.documentElement.removeAttribute("data-theme");
    } else {
      setCurrentTheme(THEMES.manual);
      document.documentElement.setAttribute("data-theme", manualTheme);
    }
  };

  const handleManualToggle = () => {
    if (currentTheme === THEMES.auto) {
      const oppositeTheme = systemTheme === "dark" ? "light" : "dark";
      setManualTheme(oppositeTheme);
      setCurrentTheme(THEMES.manual);
      document.documentElement.setAttribute("data-theme", oppositeTheme);
    } else {
      const newManualTheme = manualTheme === "light" ? "dark" : "light";
      setManualTheme(newManualTheme);
      document.documentElement.setAttribute("data-theme", newManualTheme);
    }
  };

  const getIcon = (theme: string) => {
    if (theme === THEMES.auto) {
      return "icon-[tabler--brightness-auto]";
    }

    const themeToShow = currentTheme === THEMES.auto
      ? (systemTheme === "dark" ? "light" : "dark")
      : manualTheme;

    return themeToShow === "dark" ? "icon-[tabler--moon]" : "icon-[tabler--sun]";
  };

  const buildManualButtonClass = () => {
    const baseClasses = "join-item btn btn-square w-14";
    const activeClasses = currentTheme === THEMES.manual ? "btn-primary text-primary-content" : "btn-soft";
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
          value={THEMES.auto}
          label="auto theme"
          radioChangeHandler={handleThemeChange}
        >
          <span
            className={`${getIcon(THEMES.auto)} size-6`}
          />
        </RadioButton>
        <button
          className={buildManualButtonClass()}
          onClick={handleManualToggle}
          aria-label={`${manualTheme} theme`}
          type="button"
        >
          <span
            className={`${getIcon(THEMES.manual)} size-6`}
          />
        </button>
      </div>
    </WithSkeleton>
  );
};

export default ThemePicker;
