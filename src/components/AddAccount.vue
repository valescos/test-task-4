<script lang="ts" setup>
import Plus from "../icons/Plus.vue";
import { useAccountsStore } from "../store";
const { addNewAccount } = useAccountsStore();
</script>

<template>
  <div class="flex items-center gap-2 p-2">
    <h2 class="text-xl font-bold">Учётные записи</h2>
    <button
      @click="addNewAccount"
      class="hover:bg-blue-100 px-3 py-1 border-[1px] rounded-md border-gray-300 text-xl transition-all hover:[&>*>]:stroke-gray-300 [&>*>]:transition-all"
    >
      <Plus />
    </button>
  </div>
</template>
