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
