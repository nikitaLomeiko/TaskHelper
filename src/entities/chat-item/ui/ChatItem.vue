<script setup lang="ts">
import { ref } from "vue";
import { IChatItem } from "../types/IChatItem";

interface IProps extends IChatItem {
  isChanged?: boolean;
  valueInit?: string;
  onSumbit?: (title: string) => void;
  isSelect?: boolean
}

const props = defineProps<IProps>();
const value = ref(props.valueInit);

const handleSumbit = () => {
  if(value.value?.trim().length !== 0){
    props.onSumbit?.(value.value || 'Неизвестно');
    value.value = "";
  }
}

</script>

<template>
  <div class="container-chats flex items-center gap-10 justify-between">
    <div class="flex flex-row items-center gap-1" v-if="props.isChanged">
      <input v-model="value" class="border rounded-md px-4 py-1 w-full" type="text">
      <button @click="handleSumbit" class="bg-green-600 text-white px-4 py-1 rounded-md cursor-pointer transition-colors hover:bg-green-700">изменить</button>
    </div>
    <div :class="isSelect ? 'bg-green-600' : 'hover:bg-gray-300/50'" class="flex flex-row items-center justify-between w-full p-2 rounded-md transition-colors cursor-pointer" v-else>
      <div class="chat">{{ props.name }}</div>
      <slot name="actions"/>
    </div>
  </div>
</template>

<style></style>
