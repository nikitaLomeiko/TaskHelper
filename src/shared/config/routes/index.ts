import { IRouteApp } from "./types";

enum enumRouting {
  chat = "chat",
  about = "about",
}

export const Routes: Record<enumRouting, IRouteApp> = {
  [enumRouting.chat]: { name: "chat", path: "/chat/:id" },
  [enumRouting.about]: { name: "/about", path: "/about" },
};
