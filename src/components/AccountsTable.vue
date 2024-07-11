<script lang="ts" setup>
import AccountItem from "../components/AccountItem.vue";
import { useAccountsStore } from "../store";
import { storeToRefs } from "pinia";
const accountStore = useAccountsStore();
const { accounts } = storeToRefs(accountStore);
</script>

<template>
  <div>AccountsTable</div>
  <AccountItem v-for="(acc, index) in accounts" :key="index" :account="acc" />
</template>
