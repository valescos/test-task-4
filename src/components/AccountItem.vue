<script lang="ts" setup>
import type { Account } from "../types";

defineProps<{
  account: Account;
}>();
</script>

<template>
  <div>
    {{ account.marks?.map((mark) => mark.text).join("; ") }}
  </div>
  <div>{{ account.category }}</div>
  <div>{{ account.login }}</div>
  <div>{{ account.password }}</div>
  <button>Уд</button>
</template>
