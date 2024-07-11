<script lang="ts" setup>
import type { Account } from "../types";
import { ref } from "vue";
import OpenedEye from "../icons/OpenedEye.vue";
import ClosedEye from "../icons/ClosedEye.vue";
import TrashCan from "../icons/TrashCan.vue";

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
      class="absolute right-0 px-1 hover:[&>*>]:stroke-gray-300 [&>*>]:transition-all"
    >
      <OpenedEye v-if="!visible" />
      <ClosedEye v-else />
    </button>
  </div>
  <button class="px-2 hover:[&>*>]:stroke-gray-300 [&>*>]:transition-all">
    <TrashCan />
  </button>
</template>

<!-- {{ account.category }} -->
