enum enumEndpoints {
  chats = "chats",
  messages = "messages",
}

export const Endpoints: Record<enumEndpoints, string> = {
  [enumEndpoints.chats]: "chats/",
  [enumEndpoints.messages]: "messages/",
};
