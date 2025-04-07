import { AboutPage } from "pages/about";
import { ChatPage } from "pages/chat";
import { Routes } from "shared/config/routes";
import { RouteRecordRaw } from "vue-router";

export const pages: RouteRecordRaw[] = [
  {
    path: Routes.about.path,
    component: AboutPage,
  },
  {
    path: '/',
    component: ChatPage,
  },
  {
    path: Routes.chat.path,
    component: ChatPage,
  },
];
