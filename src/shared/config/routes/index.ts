import { IRouteApp } from "./types";

enum enumRouting {
  home = "home",
  chat = "chat",
  about = "about",
}

export const Routes: Record<enumRouting, IRouteApp> = {
  [enumRouting.home]: { name: "/home", path: "/home" },
  [enumRouting.chat]: { name: "chat", path: "/chat/:id" },
  [enumRouting.about]: { name: "/about", path: "/about" },
};
