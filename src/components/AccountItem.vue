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
  <input
    type="text"
    :value="account.marks?.map((mark) => mark.text).join('; ')"
  />
  <select name="" id="" placeholder="Выберете категорию:">
    <option value="Локальная" :selected="account.category === 'Локальная'">
      Локальная
    </option>
    <option value="LDAP" :selected="account.category === 'LDAP'">LDAP</option>
  </select>
  <input
    type="text"
    :class="account.category === 'LDAP' && 'col-span-2'"
    :value="account.login"
  />

  <div v-if="account.category === 'Локальная'" class="relative">
    <input
      :type="visible ? 'text' : 'password'"
      :value="account.password"
      class="w-full pr-6"
    />
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
