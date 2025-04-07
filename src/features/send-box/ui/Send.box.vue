<script setup lang="ts">
import { IMessage } from "entities/message";
import Textarea from "primevue/textarea";
import { ref } from "vue";
import { useFileStore } from "../model/pinia/file.pinia";
import { storeToRefs } from "pinia";

interface IProps {
  typeMessage?: 'answer' | 'change'
  message?: IMessage | null;
  isReadonly?: boolean
  
  promptInit?: string;
  onCloseMessage?: () => void;
  onSubmit: (message: IMessage) => void;
}

const props = defineProps<IProps>();
const prompt = ref<string>(props.promptInit || '');

const fileInput = ref<HTMLInputElement | null>(null);

const fileStore = useFileStore();
const { files } = storeToRefs(fileStore);

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleNativeKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && event.shiftKey) {
    return
  }
  if (event.key === 'Enter') {
    handleSubmit()
    event.preventDefault();
  }
};


const handleSubmit = () => {
  if (prompt.value) {
    const now = new Date();
    const time = now.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const newMessage: IMessage = {
      answerBody: props.message?.body,
      answerId: props.message?.id,
      isBookmarked: false,
      id: Math.random().toString(16).slice(2),
      body: prompt.value.trim(),
      time: time,
      typeAuthor: "user",
    };
    props.onSubmit(newMessage);
    prompt.value = "";

    const mokMessageBot: IMessage = {
      isBookmarked: false,
      id: Math.random().toString(16).slice(2),
      body: "Привет, я пока ничего не умею, но я рад тебе помочь",
      time: time,
      typeAuthor: "bot",
    };

    setTimeout(() => {
      props.onSubmit(mokMessageBot);
    }, 1200);
  }
};
</script>

<template>
  <input type="file" ref="fileInput" @change="fileStore.handleFileChange" multiple class="hidden-input hidden" />
  <div class="flex flex-row items-end gap-2 w-full">
    <button @click="triggerFileInput" class="!mb-3 cursor-pointer">
      <svg
        class="size-5 transition-colors hover:fill-green-600"
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
    <div class="w-full">
      <div class="border-t-[1px] border-gray-400 p-1 flex flex-col gap-2" v-if="props.message">
        <div class="flex flex-row w-full justify-between">
          <h4 class="text-gray-500">{{ props.typeMessage === 'answer' ? 'Ответ на:' : 'Изменить:' }}</h4>
          <button class="cursor-pointer" @click="props.onCloseMessage">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 15 15"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <p class="text-gray-600 !text-sm line-clamp-2">{{ props.message.body }}</p>
      </div>
      <Textarea
        :readonly="props.isReadonly"
        :onkeydown="handleNativeKeyDown"
        size="large"
        placeholder="Введите текст"
        class="w-full h-full max-h-[200px]"
        auto-resize
        v-model="prompt"
        rows="1"
        cols="30"
      />
    </div>
    <button
      @click="handleSubmit"
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
  <div class="p-1 flex flex-col gap-2 -mt-8 ml-8">
    <div v-for="(file, index) in files" :key="index" class="flex flex-row items-center text-sm gap-2">
      <svg
        class="size-4"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="File_On">
          <path
            d="M19.485,7.35l-4.97-4.86a1.466,1.466,0,0,0-1.05-.43h-6.9a2.5,2.5,0,0,0-2.5,2.5V19.44a2.507,2.507,0,0,0,2.5,2.5h10.87a2.507,2.507,0,0,0,2.5-2.5V8.42A1.49,1.49,0,0,0,19.485,7.35Zm-1.27.15h-2.34a1.5,1.5,0,0,1-1.5-1.5V3.75Zm.72,11.94a1.5,1.5,0,0,1-1.5,1.5H6.565a1.5,1.5,0,0,1-1.5-1.5V4.56a1.5,1.5,0,0,1,1.5-1.5h6.81V6a2.5,2.5,0,0,0,2.5,2.5h3.06Z"
          ></path>
        </g>
      </svg>
      <p>{{ file.name }}</p>
      <p class="text-red-500">{{ file.size }} KB</p>
      <button @click="fileStore.removeFile(index)" class="cursor-pointer">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="0"
          viewBox="0 0 15 15"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
