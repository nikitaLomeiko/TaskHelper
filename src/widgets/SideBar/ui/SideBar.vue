<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
import { Button, Sidebar } from "primevue";
import { useSideBarStore } from "../store/SideBarStore";
import { useChatItemStore, ChatItem } from "entities/chat-item";
import ChatButton from "features/chat-actions/ui/chatButton.vue";
import { storeToRefs } from "pinia";

const sideBarStore = useSideBarStore();
const chatItemStore = useChatItemStore();
const { chatItems } = storeToRefs(chatItemStore);

const changedId = ref<string | null>(null);

const handleChanged = (title: string) => {
  if (changedId.value !== null) {
    chatItemStore.updateChatItem(changedId.value, title);
    changedId.value = null;
  }
};
</script>

<template>
  <div class="card flex justify-content-center fixed relative">
    <Sidebar
      v-model:visible="sideBarStore.visible"
      header="TaskHelper"
      class="sidebar w-full md:w-20rem lg:w-30rem sm: !w-screen"
      :modal="true"
      :dismissable="false"
      position="left"
    >
      <Button class="w-full" label="О сервисе" variant="link" />
      <Button
        @click="chatItemStore.addNewChat"
        class="w-full !mt-2"
        label="Создать новый чат"
      />

      <div class="flex flex-col w-full gap-2 mt-10">
        <div v-if="chatItems.length === 0">
          <p class="text-gray-500/70 text-center mt-24">Список пуст</p>
        </div>
        <ChatItem
          v-on:sumbit="(title) => handleChanged(title)"
          :is-changed="el.id === changedId"
          :value-init="el.title"
          v-for="el in chatItems"
          :id="el.id"
          :title="el.title"
        >
          <template #actions>
            <ChatButton
              :func-delete="() => chatItemStore.deleteChat(el.id)"
              :func-change="() => (changedId = el.id)"
            />
          </template>
        </ChatItem>
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
