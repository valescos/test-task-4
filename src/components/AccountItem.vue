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
  <select name="" id="" placeholder="Выберете категорию:">
    <option value="Локальная" :selected="account.category === 'Локальная'">
      Локальная
    </option>
    <option value="LDAP" :selected="account.category === 'LDAP'">LDAP</option>
  </select>
  <div :class="account.category === 'LDAP' && 'col-span-2'">
    {{ account.login }}
  </div>
  <div v-if="account.category === 'Локальная'">{{ account.password }}</div>
  <button>Уд</button>
</template>

<!-- {{ account.category }} -->
