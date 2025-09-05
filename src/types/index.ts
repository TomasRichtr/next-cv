export interface AsyncParams<T = { locale: string; }> {
    params: Promise<T>;
}

export interface AsyncSearchParams<T> {
    searchParams: Promise<T>;
}
