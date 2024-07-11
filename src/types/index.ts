import * as z from "zod";

export const accountSchema = z.object({
  id: z.string(),
  login: z.string().min(1).max(100),
  password: z.string().min(1).max(100),
});

export type AccountSchemaType = z.infer<typeof accountSchema>;

export type Account = {
  id: string;
  marks?: Mark[];
  category: Category;
  login: string;
  password: Password;
};

export type Mark = {
  text: string;
};

export type Category = "Локальная" | "LDAP";

export type Password = string | null;
