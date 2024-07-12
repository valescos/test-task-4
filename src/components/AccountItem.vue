<script lang="ts" setup>
import OpenedEye from "../icons/OpenedEye.vue";
import ClosedEye from "../icons/ClosedEye.vue";
import TrashCan from "../icons/TrashCan.vue";
import type { Mark, Category, Password } from "../types";
import { ref } from "vue";
import { useAccountsStore } from "../store";
import * as z from "zod";
import { accountSchema } from "../types";
import { AccountSchemaType } from "../types";

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

const formData = ref({
  marks: props.marks?.map((m) => m.text).join("; "),
  id: props.id,
  category: props.category,
  login: props.login,
  password: props.password,
});

const validSchema = accountSchema.safeParse(formData.value);

if (!validSchema.success) {
  errors.value = validSchema.error.format();
} else {
  errors.value = null;
}

function handleUpdate() {
  if (formData.value.category === "LDAP") formData.value.password = null;

  updateAccoundById(props.id, {
    marks: formData.value.marks
      ?.split(";")
      .filter((i) => i)
      .map((m) => {
        return {
          text: m.trim(),
        };
      }),
    id: formData.value.id,
    category: formData.value.category,
    login: formData.value.login.trim(),
    password: formData.value.password,
  });
}
</script>

<template>
  <div class="relative">
    <input
      type="text"
      v-model="formData.marks"
      @change="handleUpdate"
      class="w-full rounded-md"
      :class="errors?.marks && 'border-4 border-red-500 animate-pulse'"
    />
    <span
      class="absolute text-white px-1 font-bold rounded-md right-0 mx-2 text-sm bg-red-500 z-30 top-[50%] -translate-y-[50%]"
      >{{ errors?.marks?._errors[0] }}</span
    >
  </div>
  <select v-model="formData.category" @change="handleUpdate">
    <option value="Локальная" :selected="formData.category === 'Локальная'">
      Локальная
    </option>
    <option value="LDAP" :selected="formData.category === 'LDAP'">LDAP</option>
  </select>
  <div :class="formData.category === 'LDAP' && 'col-span-2'" class="relative">
    <input
      @change="handleUpdate"
      type="text"
      v-model="formData.login"
      class="w-full rounded-md"
      :class="errors?.login && 'border-4 border-red-500 animate-pulse'"
    />
    <span
      class="absolute text-white px-1 font-bold rounded-md right-0 mx-2 text-sm bg-red-500 z-30 top-[50%] -translate-y-[50%]"
      >{{ errors?.login?._errors[0] }}</span
    >
  </div>
  <div
    v-if="formData.category === 'Локальная'"
    class="relative"
    :class="!visible && '[&>input]:font-pass'"
  >
    <input
      @change="handleUpdate"
      type="text"
      class="w-full pr-6 rounded-md relative"
      :class="
        (errors?.password || formData.password === null) &&
        'border-4 border-red-500 animate-pulse'
      "
      v-model="formData.password"
    />
    <button
      v-if="!errors?.password && !(formData.password === null)"
      @click="visible = !visible"
      class="absolute right-0 px-1 hover:[&>*>]:stroke-gray-300 [&>*>]:transition-all"
    >
      <OpenedEye v-if="!visible" />
      <ClosedEye v-else />
    </button>
    <span
      class="absolute text-white px-1 font-bold rounded-md right-0 mx-2 text-sm bg-red-500 z-30 top-[50%] -translate-y-[50%]"
      >{{ errors?.password?._errors[0] }}</span
    >
    <span
      v-if="formData.password === null"
      class="absolute text-white px-1 font-bold rounded-md right-0 mx-2 text-sm bg-red-500 z-30 top-[50%] -translate-y-[50%]"
      >Нужно!</span
    >
  </div>
  <button
    @click="deleteAccountById(formData.id)"
    class="px-2 hover:[&>*>]:stroke-gray-300 [&>*>]:transition-all"
  >
    <TrashCan />
  </button>
</template>
