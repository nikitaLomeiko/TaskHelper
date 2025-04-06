<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Button, Sidebar } from "primevue";
import { useSideBarStore } from "../store/SideBarStore";
import { useChatItemStore, ChatItem } from "entities/chat-item";
import ChatButton from "features/chat-actions/ui/chatButton.vue";
import { storeToRefs } from "pinia";
import { useWindowSize } from "@vueuse/core";
import { RouteParams, useRoute, useRouter } from "vue-router";
import { Routes } from "shared/config/routes";
import { ApiClient, Endpoints } from "shared/api";

const route = useRoute();
const chatId = ref("");

onMounted(async () => {
  const data = await ApiClient({ url: Endpoints.chats, method: "GET" });

  if (data.status === 200) {
    chatItemStore.loadChats(data.data);
  }
});

watch(
  () => route.params,
  () => {
    chatId.value = (route.params as RouteParams).id as string;
  }
);

const sideBarStore = useSideBarStore();
const chatItemStore = useChatItemStore();
const { chatItems } = storeToRefs(chatItemStore);

const router = useRouter();

const changedId = ref<string | null>(null);

const { width } = useWindowSize();

const handleChanged = (title: string) => {
  if (changedId.value !== null) {
    chatItemStore.updateChatItem(changedId.value, title);
    changedId.value = null;
  }
};
</script>

<template>
  <div class="card flex justify-content-center fixed">
    <Sidebar
      v-model:visible="sideBarStore.visible"
      header="TaskHelper"
      class="sidebar w-full md:w-20rem lg:w-30rem"
      :modal="width < 768"
      :dismissable="false"
      position="left"
    >
      <Button @click="router.push(Routes.about.name)" class="w-full" label="О сервисе" variant="link" />
      <Button @click="chatItemStore.addNewChat" class="w-full !mt-2" label="Создать новый чат" />

      <div class="flex flex-col w-full gap-2 mt-10">
        <div v-if="chatItems.length === 0">
          <p class="text-gray-500/70 text-center mt-24">Список пуст</p>
        </div>
        <ChatItem
          :onclick="() => router.push(`/${Routes.chat.name}/${el.id}`)"
          :is-select="String(el.id) === chatId"
          v-on:sumbit="(title) => handleChanged(title)"
          :is-changed="String(el.id) === changedId"
          :value-init="el.name"
          v-for="el in chatItems"
          :id="String(el.id)"
          :name="el.name"
        >
          <template v-if="!el.isNoDelete" #actions>
            <ChatButton :func-delete="() => chatItemStore.deleteChat(el.id)" :func-change="() => (changedId = el.id)" />
          </template>
        </ChatItem>
      </div>
    </Sidebar>

    <Button
      class="btn transform -rotate-90 transition-transform text-center w-[8em]"
      @click="sideBarStore.visible = true"
      label=""
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path>
      </svg>
    </Button>
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
  background-repeat: no-repeat;
  background-size: 20%;
  background-position: center;
  left: -47px;
  top: 292px;
}
</style>
