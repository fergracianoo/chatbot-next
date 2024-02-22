"use client";
import { FC } from "react";
import { Message } from "../Message";
import { Header } from "./Header";

import { UserSchema } from "@/interfaces/Chat";
import { chatStore } from "@/store/chat";
import SendMessage from "../SendMessage";

interface chatProps {
  id: string;
  user: UserSchema;
  inicialMessage: string;
}

export const Chat: FC<chatProps> = ({ id, inicialMessage, user }) => {
  const { chat } = chatStore();

  const filteredChat = chat?.chats?.find((chat) => chat.id === id);

  return (
    <div className="flex flex-col w-full max-w-sm h-[500px] border border-gray-200 rounded-lg overflow-hidden">
      <Header avatar={user?.avatar} name={user?.name} />
      <div className="flex flex-col h-full p-4 overflow-auto">
        <div className="flex flex-col gap-4">
          <Message.Root>
            <Message.Content text={inicialMessage} messageType="received" />
          </Message.Root>
          {filteredChat?.messages?.map((message, index) => (
            <Message.Root
              key={index}
              messageType={message?.messageContent?.messageType}
            >
              {message?.avatar && (
                <Message.Avatar
                  alt={user?.avatar?.alt}
                  size={user?.avatar?.size}
                  src={user?.avatar?.src}
                  className={user?.avatar?.className}
                />
              )}
              <Message.Content
                text={message?.messageContent?.text}
                messageType={message?.messageContent?.messageType}
              />
            </Message.Root>
          ))}
        </div>
      </div>
      <SendMessage id={id} />
    </div>
  );
};
