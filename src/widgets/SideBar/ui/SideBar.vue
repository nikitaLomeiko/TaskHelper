<script setup lang="ts">
import { ref } from "vue";
import { Button, Sidebar } from "primevue";
import { useSideBarStore } from "../store/SideBarStore";
import { panelMenu } from "features/panel-menu";

const sideBarStore = useSideBarStore();

const visible = ref(true);
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
</style>
