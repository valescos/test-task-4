export type Account = {
  marks?: Mark[];
  category: "Локальная" | "LDAP";
  login: string;
  password: string | null;
};

export type Mark = {
  text: string;
};
