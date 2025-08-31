export interface NewReference {
  userId: number;
  reference: string;
}

export interface ReferenceWithUser {
  id: number;
  reference: string;
  user_id: number;
  date: string;
  email: string;
}


export enum FormFields {
  Reference = "reference",
}
