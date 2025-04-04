import { HomePage } from "pages/home";
import { AboutPage } from "pages/about";
import { ChatPage } from "pages/chat";
import { Routes } from "shared/config/routes";
import { RouteRecordRaw } from "vue-router";

export const pages: RouteRecordRaw[] = [
  {
    path: Routes.home.path,
    component: HomePage,
  },
  {
    path: Routes.about.path,
    component: AboutPage,
  },
  {
    path: Routes.chat.path,
    component: ChatPage,
  },
];
