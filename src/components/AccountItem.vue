<script lang="ts" setup>
import type { Mark, Category, Password } from "../types";
import { ref } from "vue";
import { useAccountsStore } from "../store";
import OpenedEye from "../icons/OpenedEye.vue";
import ClosedEye from "../icons/ClosedEye.vue";
import TrashCan from "../icons/TrashCan.vue";
import * as z from "zod";
import { AccountSchemaType } from "../types";
import { accountSchema } from "../types";

const { deleteAccountById, updateAccoundById } = useAccountsStore();

const visible = ref(false);
const errors = ref<z.ZodFormattedError<AccountSchemaType> | null>(null);

const props = defineProps<{
  marks?: Mark[];
  id: string;
  category: Category;
  password: Password;
  login: string;
}>();

const formData = {
  marks: props.marks?.map((m) => m.text).join("; "),
  id: props.id,
  category: props.category,
  login: props.login,
  password: props.password,
};

function handleUpdate() {
  const vaildSchema = accountSchema.safeParse(formData);
  console.log(vaildSchema.success);

  updateAccoundById(props.id, {
    marks: formData.marks?.split(";").map((m) => {
      return {
        text: m.trim(),
      };
    }),
    id: formData.id,
    category: formData.category,
    login: formData.login,
    password: formData.password,
  });
}
</script>

<template>
  <input type="text" v-model="formData.marks" @change="handleUpdate" />
  <select v-model="formData.category" @change="handleUpdate">
    <option value="Локальная" :selected="formData.category === 'Локальная'">
      Локальная
    </option>
    <option value="LDAP" :selected="formData.category === 'LDAP'">LDAP</option>
  </select>
  <input
    @change="handleUpdate"
    type="text"
    v-model="formData.login"
    :class="formData.category === 'LDAP' && 'col-span-2'"
  />

  <div v-if="formData.category === 'Локальная'" class="relative">
    <input
      @change="handleUpdate"
      :type="visible ? 'text' : 'password'"
      class="w-full pr-6"
      v-model="formData.password"
    />
    <button
      @click="visible = !visible"
      class="absolute right-0 px-1 hover:[&>*>]:stroke-gray-300 [&>*>]:transition-all"
    >
      <OpenedEye v-if="!visible" />
      <ClosedEye v-else />
    </button>
  </div>
  <button
    @click="deleteAccountById(formData.id)"
    class="px-2 hover:[&>*>]:stroke-gray-300 [&>*>]:transition-all"
  >
    <TrashCan />
  </button>
</template>
