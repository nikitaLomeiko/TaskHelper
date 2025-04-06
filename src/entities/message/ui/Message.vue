<script setup lang="ts">
import { ref } from "vue";
import { IMessageNotID } from "../model/types";
import Toast from 'primevue/toast';
import { useToast } from "primevue";

const toast = useToast();

interface IProps extends IMessageNotID {
  onDelete: () => void;
  onBookmark: () => void;
  onAnswer: () => void;
  onChange?: () => void;
  orientation?: "left" | "right";
}

const {
  body,
  onAnswer,
  onBookmark,
  onDelete,
  orientation = "left",
  time,
  typeAuthor = "bot",
  onChange,
  answerBody,
  isBookmarked,
} = defineProps<IProps>();

const isShowUpdate = ref(false);

const handleCopyMessage = () => {
  navigator.clipboard.writeText(body).then(function() {
    toast.add({ severity: 'success', summary: 'Сообщение скопировано в буфер обмена', life: 3000 });
}, function(err) {
  console.error('Произошла ошибка при копировании текста: ', err);
});
};

</script>

<template>
  <div :class="orientation === 'right' ? 'flex-row-reverse' : 'flex-row'" class="flex gap-2 w-fit max-w-[600px]">
    <div
      :class="typeAuthor === 'bot' ? 'bg-gray-400' : 'bg-green-700'"
      class="rounded-full w-8 h-8 max-w-8 max-h-8 p-2 flex items-center justify-center mt-2"
    >
      <svg
        v-if="typeAuthor === 'bot'"
        class="size-5 fill-white"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 640 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M320 0c17.7 0 32 14.3 32 32l0 64 120 0c39.8 0 72 32.2 72 72l0 272c0 39.8-32.2 72-72 72l-304 0c-39.8 0-72-32.2-72-72l0-272c0-39.8 32.2-72 72-72l120 0 0-64c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0z"
        ></path>
      </svg>
      <svg
        v-else
        class="size-4 fill-white"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
        ></path>
      </svg>
    </div>
    <div class="flex flex-col gap-1">
      <div v-if="answerBody" class="p-1 bg-gray-300/20 rounded-lg px-4">
        <div class="border-l-[2px] pl-2 border-gray-400/50">
          <p class="text-gray-600/90">TaskHelper</p>
          <p class="text-gray-600/50">{{ answerBody }}</p>
        </div>
      </div>
      <div>
        <div
          @mouseenter="isShowUpdate = true"
          @mouseleave="isShowUpdate = false"
          :class="typeAuthor === 'user' ? 'bg-green-700/30' : 'bg-gray-300/40'"
          class="relative bg-gray-300/40 flex flex-col gap-1 rounded-2xl px-6 py-3"
        >
          <button
            @click="onChange"
            v-if="typeAuthor === 'user' && isShowUpdate"
            class="absolute top-2 right-2 cursor-pointer"
          >
            <svg
              class="size-3 fill-gray-400"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
              ></path>
            </svg>
          </button>
          <pre class="whitespace-pre-wrap break-words font-sans text-gray-800 leading-5 text-sm md: max-w-[200px] sm:max-w-[400px] lg:max-w-[600px]">{{ body }}</pre>
          <div class="flex flex-row items-center mt-2 justify-between min-w-[200px]">
            <div class="flex flex-row items-center gap-4">
              <button @click="handleCopyMessage" class="cursor-pointer">
                <svg
                  class="size-5 fill-green-700"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                  ></path>
                </svg>
              </button>
              <button class="cursor-pointer" @click="onBookmark">
                <svg
                  v-if="!isBookmarked"
                  class="size-4 fill-blue-500"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 384 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
                  ></path>
                </svg>
                <svg
                  v-else
                  class="size-5"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1"
                  viewBox="0 0 48 48"
                  enable-background="new 0 0 48 48"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="#F44336" d="M37,43l-13-6l-13,6V9c0-2.2,1.8-4,4-4h18c2.2,0,4,1.8,4,4V43z"></path>
                </svg>
              </button>
              <button class="cursor-pointer" @click="onAnswer">
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
                    d="M10.53 5.03a.75.75 0 1 0-1.06-1.06l-6.25 6.25a.75.75 0 0 0 0 1.06l6.25 6.25a.75.75 0 1 0 1.06-1.06L5.56 11.5H17a3.248 3.248 0 0 1 3.25 3.248v4.502a.75.75 0 0 0 1.5 0v-4.502A4.748 4.748 0 0 0 17 10H5.56l4.97-4.97Z"
                  ></path>
                </svg>
              </button>
              <button class="cursor-pointer" @click="onDelete">
                <svg
                  class="fill-red-500"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1.3em"
                  width="1.3em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path
                    d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
                  ></path>
                </svg>
              </button>
            </div>
            <p class="text-gray-400">{{ time }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Toast />

</template>
