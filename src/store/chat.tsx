import { create } from "zustand";

import { ChatSchema } from "../interfaces/Chat";

interface ChatConfig {
  chat: ChatSchema;
  updateChat: (chat: ChatSchema) => void;
}

export const chatStore = create<ChatConfig>()((set, get) => ({
  chat: get()?.chat,
  updateChat: (chat: ChatSchema) => set({ chat }),
}));
