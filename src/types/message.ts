export interface Message {
  id: number;
  name: string;
  date: string;
  user_id: number | null;
  company_name: string | null;
  email: string;
  phone: string | null;
  message: string;
}

export type NewMessage = Partial<Omit<Message, "id" & "date">>;
