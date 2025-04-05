<script setup lang="ts">
import { IMessage } from "../model/types";

interface IProps extends Omit<IMessage, 'id'> {
  onDelete: () => void;
  onBookmark: () => void;
  onAnswer: () => void;
  orientation?: 'left' | 'right'
}

const {body, onAnswer, onBookmark, onDelete, orientation = 'left', time, typeAuthor = 'bot'} = defineProps<IProps>();
</script>

<template>
  <div :class="orientation === 'right' ? 'flex-row-reverse' : 'flex-row'" class="flex gap-2 w-full max-w-[500px]">
    <div :class="typeAuthor === 'bot' ? 'bg-gray-400' : 'bg-green-700'" class="rounded-full  w-8 h-8 max-w-8 max-h-8 p-2 flex items-center justify-center mt-2">
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
    <div class="bg-gray-300/40 flex flex-col gap-4 rounded-2xl p-4">
      <h3 :class="orientation === 'right' ? 'text-end' : 'text-start'" class="text-lg">{{ typeAuthor === 'bot' ? 'Bot' : 'User' }}</h3>
      <p class="leading-6">
        {{ body }}
      </p>
      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-row items-center gap-4">
          <button>
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
          <button @click="onBookmark">
            <svg
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
          </button>
          <button @click="onAnswer">
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
          <button @click="onDelete">
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
</template>

<style scoped></style>
