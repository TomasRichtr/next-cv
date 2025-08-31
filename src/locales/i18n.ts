import dayjs from "dayjs";
import "dayjs/locale/cs";
import {
  createInstance, type Resource,
} from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import {
  values,
} from "lodash";

import {
  NAMESPACE,
} from "@/constants/locales";

import i18nConfig from "./i18n.config";

const initTranslations = async (
  locale: string,
  namespaces: string[] = values(NAMESPACE),
  i18nInstance?: ReturnType<typeof createInstance>,
  resource?: Resource,
) => {
  i18nInstance = i18nInstance || createInstance();

  if (!resource) {
    i18nInstance.use(resourcesToBackend(
      (lang: string, namespace: string) => {
        return import(`./${lang}/${namespace}.json`);
      },
    ));
  }

  await i18nInstance.init({
    lng: locale,
    resources: resource,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resource ? [] : i18nConfig.locales,
  });

  dayjs.locale(locale);

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
};

export default initTranslations;
