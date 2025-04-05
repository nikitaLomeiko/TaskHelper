<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
import { Button, Sidebar } from "primevue";
import { useSideBarStore } from "../store/SideBarStore";
import { IChatItem, useChatItemStore } from "entities/chat-item";
import ChatButton from "features/chat-actions/ui/chatButton.vue";
import { storeToRefs } from "pinia";

const sideBarStore = useSideBarStore();
const chatItemStore = useChatItemStore();
const { chatItems } = storeToRefs(chatItemStore);
const flag = ref(false);
const newchat = ref({
  id: "14",
  content: "dasdasd",
  title: "new chat",
});
const isChanged = ref(false);

console.log(chatItemStore.chatItems);
const visible = ref(true);

const deleteChats = (el: IChatItem) => {
  chatItemStore.deleteChat(el.id);
};
// watchEffect(() => {
//   chatItemStore.chatItems.push({
//     id: "13",
//     content: "dasdasd",
//     title: "new chat",
//   });
// });
</script>

<template>
  <div class="card flex justify-content-center fixed relative">
    <Sidebar
      v-model:visible="sideBarStore.visible"
      header="TaskHelper"
      class="sidebar w-full md:w-20rem lg:w-30rem"
      :modal="false"
      :dismissable="false"
      position="left"
    >
      <div
        class="container-chats flex items-center gap-10"
        v-for="el in chatItems"
        :key="el.id"
      >
        <div class="chat">{{ el.title }}</div>
        <div
          class="icon"
          @click="flag = !flag"
          style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255)"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="40px"
            width="40px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            ></path>
          </svg>
          <transition name="fade">
            <div class="btn-chat" v-if="flag">
              <ChatButton
                :func-change="() => deleteChats(el)"
                :func-delete="() => deleteChats(el)"
              />
            </div>
          </transition>
        </div>
      </div>
    </Sidebar>

    <Button
      class="btn transform -rotate-90 transition-transform text-center w-[8em]"
      icon="pi pi-bars"
      @click="sideBarStore.visible = true"
      label=""
    />
  </div>
</template>

<style scoped>
.sidebar {
  background-color: rgb(191, 62, 62);
}

.btn {
  border-radius: none;
  position: absolute;
  width: 8em;
  height: 3em;
  background-image: url(https://icon-library.com/images/hamburger-icon-white/hamburger-icon-white-16.jpg);
  background-repeat: no-repeat;
  background-size: 20%;
  background-position: center;
  left: -47px;
  top: 292px;
}

.btn-chat {
}
</style>
