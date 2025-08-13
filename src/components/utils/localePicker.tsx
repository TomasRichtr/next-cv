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

import {
  LOCALES,
} from "@/constants/locales";
import i18nConfig from "@/utils/locales/i18n.config";

const LocalePicker = () => {
  const {
    i18n,
  } = useTranslation();
  const currentLocale = i18n.language;

  const router = useRouter();
  const currentPathname = usePathname();

  const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (currentLocale === newLocale) return;

    if(
      currentLocale === i18nConfig.defaultLocale &&
        !i18nConfig.prefixDefault
    ) {
      router.push(`/${newLocale}${currentPathname}`);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }
    router.refresh();
  };

  return (
    <select
      onChange={handleLocaleChange}
      value={currentLocale}
    >
      {values(LOCALES).map((locale) => (
        <option
          key={locale}
          value={locale}
        >
          {locale}
        </option>
      ))}
    </select>
  );
};

export default LocalePicker;
