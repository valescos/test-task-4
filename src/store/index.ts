import { defineStore } from "pinia";
import { ref } from "vue";
import type { Account } from "../types";

const dummyaccs: Account[] = [
  {
    category: "LDAP",
    login: "AAA",
    password: "strongpassword0_0",
  },
  {
    marks: [{ text: "A" }, { text: "B" }],
    category: "LDAP",
    login: "BBB",
    password: "weakpassword:)",
  },
  {
    marks: [{ text: "C" }, { text: "D" }],
    category: "Локальная",
    login: "CCC",
    password: "safepassword!",
  },
];

export const useAccountsStore = defineStore("accounts", () => {
  const accounts = ref<Account[]>(dummyaccs);

  return { accounts };
});
