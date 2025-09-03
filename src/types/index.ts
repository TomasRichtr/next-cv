export interface AsyncParams<T = { locale: string; }> {
    params: Promise<T>;
}
