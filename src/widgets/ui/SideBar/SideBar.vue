<script setup lang="ts">
import { ref } from "vue";
import { Button, PanelMenu, Sidebar } from "primevue";
import { keysSideBar } from "./keys/keys";
import { useSideBarStore } from "./store/SideBarStore";

const sideBarStore = useSideBarStore();

const visible = ref(true);
</script>

<template>
  <div class="card flex justify-content-center fixed">
    <Sidebar
      v-model:visible="sideBarStore.visible"
      header="Sidebar"
      class="sidebar w-full md:w-20rem lg:w-30rem"
      :modal="false"
      :dismissable="false"
      position="left"
    >
      <PanelMenu :model="keysSideBar" />
    </Sidebar>
    <Button
      class="btn transform -rotate-90 transition-transform text-center w-[8em]"
      icon="pi pi-arrow-right"
      @click="sideBarStore.visible = true"
      label="Меню"
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
  left: -47px;
  top: 292px;
}
</style>
