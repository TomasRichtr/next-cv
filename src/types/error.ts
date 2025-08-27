export enum DbErrorCode {
  UNIQUE = "SQLITE_CONSTRAINT_UNIQUE",
}

export interface Quote {
  q: string;
  a: string;
}
