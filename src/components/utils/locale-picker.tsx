"use client";

import {
  values,
} from "lodash";
import {
  usePathname,
  useRouter,
} from "next/navigation";
import {
  ChangeEvent,
} from "react";
import {
  useTranslation,
} from "react-i18next";

import RadioButton from "@/components/forms/inputs/radio-button";
import WithSkeleton from "@/components/layout/with-skeleton";
import {
  LOCALES,
} from "@/constants/locales";

const LocalePicker = () => {
  const {
    i18n,
  } = useTranslation();
  const currentLocale = i18n.language;

  const router = useRouter();
  const currentPathname = usePathname();

  const handleLocaleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newLocale = e.target.value;
    if (currentLocale === newLocale) return;

    await i18n.changeLanguage(newLocale);

    const pathSegments = currentPathname.split("/").filter(Boolean);
    const firstSegment = pathSegments[0];

    const isFirstSegmentLocale = values(LOCALES).includes(firstSegment);
    const pathWithoutLocale = isFirstSegmentLocale
      ? `/${pathSegments.slice(1).join("/")}`
      : currentPathname;

    const newPath = `/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
    router.push(newPath);
    router.refresh();
  };

  return (
    <WithSkeleton>
      <div
        className="join drop-shadow"
      >
        {values(LOCALES).map((locale) => {
          return (
            <RadioButton
              name="locale-picker"
              key={locale}
              selectedValue={currentLocale}
              value={locale}
              label={locale.toUpperCase()}
              radioChangeHandler={handleLocaleChange}
            />
          );
        })}
      </div>
    </WithSkeleton>

  );
};

export default LocalePicker;
