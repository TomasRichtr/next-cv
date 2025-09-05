import {
  type TFunction,
} from "i18next";

export interface AsyncParams<T = { locale: string; }> {
    params: Promise<T>;
}

export interface AsyncSearchParams<T> {
    searchParams: Promise<T>;
}

export type Translate = TFunction<"translation", undefined>
