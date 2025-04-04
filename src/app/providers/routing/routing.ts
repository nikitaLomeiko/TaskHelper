import { createWebHistory, createRouter } from "vue-router";
import { pages } from "./lib/config/pages";

export const router = createRouter({
  history: createWebHistory(),
  routes: pages,
});
