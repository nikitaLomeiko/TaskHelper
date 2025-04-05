<script setup lang="ts">
import Textarea from "primevue/textarea";

interface IProps {
  message?: string;
  messageId?: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="flex flex-row items-end gap-2 w-full">
    <button class="!mb-3">
      <svg
        class="size-5"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.187 3.588a2.75 2.75 0 0 0-3.889 0L5.575 13.31a4.5 4.5 0 0 0 6.364 6.364l8.662-8.662a.75.75 0 0 1 1.061 1.06L13 20.735a6 6 0 0 1-8.485-8.485l9.723-9.723a4.247 4.247 0 0 1 4.124-1.139 4.247 4.247 0 0 1 3.025 3.025 4.247 4.247 0 0 1-1.139 4.124l-9.193 9.193a2.64 2.64 0 0 1-1.858.779 2.626 2.626 0 0 1-1.854-.779c-.196-.196-.338-.47-.43-.726a2.822 2.822 0 0 1-.168-.946c0-.7.284-1.373.775-1.864l8.132-8.131a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734l-8.131 8.132a1.148 1.148 0 0 0-.336.803c.003.204.053.405.146.587.01.018.018.028.02.032.22.215.501.332.786.332.29 0 .58-.121.798-.34l9.192-9.192a2.75 2.75 0 0 0 0-3.89Z"
        ></path>
      </svg>
    </button>
    <div>
      <div class="border-t-[1px] border-gray-400 p-1 flex flex-col gap-2" v-if="message">
        <h4 class="text-gray-500">Ответ на:</h4>
        <p class="text-gray-600 !text-sm line-clamp-2">{{ message }}</p>
      </div>
      <Textarea
        size="large"
        placeholder="Введите текст"
        class="w-full h-full max-h-[200px]"
        auto-resize
        v-model="value"
        rows="1"
        cols="30"
      />
    </div>
    <button
      class="bg-green-600 rounded-md w-10 h-[38px] !mb-1 flex items-center justify-center p-1 cursor-pointer transition-colors hover:!bg-green-700"
    >
      <svg
        class="size-3 fill-white ml-[2px]"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
      </svg>
    </button>
  </div>
</template>

<style scoped></style>
