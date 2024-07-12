import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Account } from "../types";

export const useAccountsStore = defineStore(
  "accounts",
  () => {
    const accounts = ref<Account[]>([]);

    const rerenderKeys = computed(() => {
      const tempArr = [];
      for (let i = 0; i < accounts.value.length; i++) {
        tempArr.push(crypto.randomUUID());
      }
      return tempArr;
    });

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
    };
  },
  {
    persist: true,
  }
);
