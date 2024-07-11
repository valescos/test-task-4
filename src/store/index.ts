import { defineStore } from "pinia";
import { ref } from "vue";
import type { Account } from "../types";

const dummyaccs: Account[] = [
  {
    category: "LDAP",
    login: "AAA",
    password: null,
  },
  {
    marks: [{ text: "A" }, { text: "B" }],
    category: "LDAP",
    login: "BBB",
    password: null,
  },
  {
    marks: [{ text: "C" }, { text: "D" }],
    category: "Локальная",
    login: "CCC",
    password: "safepassword!",
  },
  {
    marks: [{ text: "E" }, { text: "FFF" }],
    category: "Локальная",
    login: "FFF",
    password: "safepassword!!!",
  },
];

export const useAccountsStore = defineStore("accounts", () => {
  const accounts = ref<Account[]>(dummyaccs);

  return { accounts };
});
