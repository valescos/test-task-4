<script lang="ts" setup>
import AccountItem from "../components/AccountItem.vue";
import { useAccountsStore } from "../store";
import { storeToRefs } from "pinia";
import { cn } from "../utils";
const accountStore = useAccountsStore();
const { accounts } = storeToRefs(accountStore);

const classes = cn(
  "grid grid-cols-[1fr_12rem_1fr_1fr_2rem] p-2 gap-1",
  "[&>p]:text-gray-300 [&>p]:font-bold [&>p]:text-sm [&>p]:py-1",
  "[&>div]:border-[1px] [&>div]:border-gray-300 [&>div]:rounded-md [&>div]:px-2",
  "[&>input]:border-[1px] [&>input]:border-gray-300 [&>input]:rounded-md [&>input]:px-2",
  "[&>select]:border-[1px] [&>select]:border-gray-300 [&>select]:rounded-md [&>select]:px-2"
);
</script>

<template>
  <div :class="classes">
    <p>Метки</p>
    <p>Тип записи</p>
    <p>Логин</p>
    <p>Пароль</p>
    <p />
    <AccountItem
      v-for="(acc, index) in accounts"
      :key="index"
      :marks="acc.marks"
      :id="acc.id"
      :category="acc.category"
      :password="acc.password"
      :login="acc.login"
    />
  </div>
</template>
