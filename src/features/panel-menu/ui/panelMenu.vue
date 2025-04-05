<script setup lang="ts">
import { PanelMenu } from "primevue";
import { keysSideBar } from "../keys/keys";
</script>

<template>
  <div class="card flex justify-content-center">
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
  </div>
</template>

<style scoped>
.panel-item {
  background-color: rgb(110, 240, 110);
}

.temp {
  text-decoration: none;
}
</style>
