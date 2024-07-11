<script lang="ts" setup>
import type { Account } from "../types";
import { ref } from "vue";

defineProps<{
  account: Account;
}>();

const visible = ref(false);
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
  <div v-if="account.category === 'Локальная'" class="relative">
    <input :type="visible ? 'text' : 'password'" :value="account.password" />
    <button
      @click="visible = !visible"
      class="absolute bg-gray-200 right-0 px-1"
    >
      {{ visible ? "Не видеть!" : "Видеть!" }}
    </button>
  </div>
  <button>Уд</button>
</template>

<!-- {{ account.category }} -->
