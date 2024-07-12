import * as z from "zod";

export const accountSchema = z.object({
  marks: z.string().trim().max(50, ">50!").optional(),
  login: z.string().trim().min(1, "Нужно!").max(100, ">100!"),
  password: z.string().trim().min(1, "Нужно!").max(100, ">100!"),
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
