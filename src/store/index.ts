import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Account } from "../types";

const dummyaccs: Account[] = [
  {
    id: "aaaa-1111-bbbb",
    category: "LDAP",
    login: "AAA",
    password: null,
  },
  {
    id: "aaaa-2345-bbbb",

    marks: [{ text: "A" }, { text: "B" }],
    category: "LDAP",
    login: "BBB",
    password: null,
  },
  {
    id: "aaaa-1233-bbbb",

    marks: [{ text: "C" }, { text: "D" }],
    category: "Локальная",
    login: "CCC",
    password: "safepassword!",
  },
  {
    id: "aaaa-1551-cdbb",
    marks: [{ text: "E" }, { text: "FFF" }],
    category: "Локальная",
    login: "FFF",
    password: "safepassword!!!",
  },
];

export const useAccountsStore = defineStore(
  "accounts",
  () => {
    const accounts = ref<Account[]>(dummyaccs);

    const rerenderKeys = computed(() => {
      const tempArr = [];
      for (let i = 0; i < accounts.value.length; i++) {
        tempArr.push(crypto.randomUUID());
      }
      return tempArr;
    });

    function getAccoundById(id: string) {
      const targetIndex = accounts.value.findIndex((acc) => acc.id === id);
      return accounts.value[targetIndex];
    }

    function addNewAccount() {
      accounts.value.push({
        id: crypto.randomUUID(),
        category: "Локальная",
        login: "",
        password: "",
      });
    }

    function deleteAccountById(id: string) {
      const targetIndex = accounts.value.findIndex((acc) => acc.id === id);
      const tempArray = [
        ...accounts.value.slice(0, targetIndex),
        ...accounts.value.slice(targetIndex + 1),
      ];
      accounts.value = tempArray;
    }

    function updateAccoundById(id: string, updateData: Account) {
      const targetIndex = accounts.value.findIndex((acc) => acc.id === id);
      const tempArray = [
        ...accounts.value.slice(0, targetIndex),
        {
          ...updateData,
        },
        ...accounts.value.slice(targetIndex + 1),
      ];
      accounts.value = tempArray;
    }

    return {
      accounts,
      rerenderKeys,
      addNewAccount,
      deleteAccountById,
      updateAccoundById,
      getAccoundById,
    };
  },
  {
    persist: true,
  }
);
