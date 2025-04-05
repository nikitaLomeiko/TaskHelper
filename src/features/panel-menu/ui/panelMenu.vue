<script setup lang="ts">
import { PanelMenu } from "primevue";
import { keysSideBar } from "../keys/keys";

import { ref } from "vue";
import Sidebar from "primevue/sidebar";
import Menu from "primevue/menu";
import Button from "primevue/button";

const visible = ref(true);
</script>

<template>
  <!-- <div class="card flex justify-content-center">
    <PanelMenu :model="keysSideBar" class="w-full md:w-20rem">
      <template class="temp" #item="{ item }">
        <a
          v-ripple
          class="panel-item flex align-items-center px-3 py-2 m-1 cursor-pointer rounded"
        >
          <span :class="[item.icon, 'text-primary']" />
          <span :class="['ml-2', { 'font-semibold': item.items }]">{{
            item.label
          }}</span>
          <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
          <span
            v-if="item.shortcut"
            class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1"
            >{{ item.shortcut }}</span
          >
        </a>
      </template>
    </PanelMenu>
  </div> -->
  <div class="layout-wrapper">
    <!-- Статичный сайдбар -->
    <Sidebar
      :showCloseIcon="false"
      :dismissable="false"
      :modal="false"
      position="left"
      class="static-sidebar"
    >
      sdfsdfsdf
      <div class="sidebar-content"></div>
    </Sidebar>

    <!-- Основное содержимое -->
    <!-- <div class="main-content">
      <Button
        icon="pi pi-bars"
        @click="visible = !visible"
        class="menu-button"
      />
    </div> -->
  </div>
</template>

<style scoped>
/* .panel-item {
  background-color: rgb(110, 240, 110);
}

.temp {
  text-decoration: none;
} */
.main-content {
  overflow: hidden;
}

.layout-wrapper {
  display: flex;
  min-height: 100vh;
}

.static-sidebar {
  position: static !important;
  transform: none !important;
  width: 250px !important;
  height: 100vh;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.main-content {
  flex: 1;
  padding: 2rem;
  margin-left: 250px; /* Ширина сайдбара */
}

.menu-button {
  display: none;
}

@media (max-width: 768px) {
  .static-sidebar {
    position: fixed !important;
    transform: translateX(-100%) !important;
    z-index: 1000;
  }

  .static-sidebar.sidebar-visible {
    transform: translateX(0) !important;
  }

  .main-content {
    margin-left: 0;
  }

  .menu-button {
    display: block;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1100;
  }
}
</style>
