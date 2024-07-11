<script lang="ts" setup>
import AccountItem from "../components/AccountItem.vue";
import { useAccountsStore } from "../store";
import { storeToRefs } from "pinia";
import { cn } from "../utils";
const accountStore = useAccountsStore();
const { accounts } = storeToRefs(accountStore);

const classes = cn(
  "grid grid-cols-5 p-2 gap-1",
  "[&>p]:text-gray-300 [&>p]:font-bold [&>p]:text-sm [&>p]:py-1",
  "[&>p]:text-gray-300 [&>p]:font-bold [&>p]:text-sm [&>p]:py-1",
  "[&>div]:border-[1px] [&>div]:border-gray-300 [&>div]:rounded-md [&>div]:px-2"
);
</script>

<template>
  <div :class="classes">
    <p>Метки</p>
    <p>Тип записи</p>
    <p>Логин</p>
    <p>Пароль</p>
    <p />
    <AccountItem v-for="(acc, index) in accounts" :key="index" :account="acc" />
  </div>
</template>
