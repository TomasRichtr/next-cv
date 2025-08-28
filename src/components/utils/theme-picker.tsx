"use client";

import {
  values,
} from "lodash";
import {
  ChangeEvent,
  useEffect,
} from "react";

import RadioButton from "@/components/forms/radio-button";
import WithSkeleton from "@/components/layout/with-skeleton";
import {
  useLocalStorage,
} from "@/utils/composables/useLocaleStorage";

const THEMES = {
  auto: "auto",
  light: "light",
  dark: "dark",
} as const;

const ThemePicker = () => {
  const [currentTheme, setCurrentTheme] = useLocalStorage("theme", "auto");

  useEffect(() => {
    if (currentTheme === "auto") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", currentTheme);
    }
  }, [currentTheme]);

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.value;
    if (currentTheme === newTheme) return;

    setCurrentTheme(newTheme);
    if (newTheme === "auto") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  const getIcon = (theme: string) => {
    if (theme === "auto") {
      return "icon-[tabler--brightness-auto]";
    } else if (theme === "dark") {
      return "icon-[tabler--moon]";
    }
    return "icon-[tabler--sun]";
  };

  return (
    <WithSkeleton
      widthClass="w-42"
    >
      <div
        className="join drop-shadow"
      >
        {values(THEMES).map((theme) => {
          return (
            <RadioButton
              name="theme-picker"
              key={theme}
              selectedValue={currentTheme}
              value={theme}
              label={`${theme} theme`}
              radioChangeHandler={handleThemeChange}
            >
              <span
                className={`${getIcon(theme)} size-6`}
              />
            </RadioButton>
          );
        })}
      </div>
    </WithSkeleton>
  );
};

export default ThemePicker;
