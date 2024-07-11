<script lang="ts" setup>
import type { Account } from "../types";

defineProps<{
  key: number;
  account: Account;
}>();
</script>

<template>
  <div>
    {{ account.marks }} - {{ account.category }} - {{ account.login }} -
    {{ account.password }}
  </div>
</template>
