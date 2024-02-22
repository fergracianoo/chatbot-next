import { FC } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { chatStore } from "@/store/chat";

import { ChatProps } from "@/interfaces/Chat";
import {
  SendMessageProps,
  SendMessageSchema,
} from "@/schema/SendMessageSchema";

interface SendProps {
  id: string;
}

const SendMessage: FC<SendProps> = ({ id }) => {
  const { chat, updateChat } = chatStore();

  const { control, handleSubmit, reset } = useForm<SendMessageProps>({
    resolver: zodResolver(SendMessageSchema),
  });

  const onSubmit = async (dataField: SendMessageProps) => {
    const updatedChats: ChatProps[] = chat?.chats?.map((chat) => {
      if (chat.id === id) {
        return {
          ...chat,
          messages: [
            ...chat.messages,
            {
              messageContent: {
                text: dataField?.message,
                messageType: "sent",
              },
              avatar: true,
            },
          ],
        };
      }

      return chat;
    });

    if (updatedChats?.find((chat) => chat?.id === id)) {
      updateChat({ chats: updatedChats });
    } else {
      const chats = chat?.chats || "";

      updateChat({
        chats: [
          ...chats,
          {
            id: id,
            messages: [
              {
                messageContent: {
                  text: dataField?.message,
                  messageType: "sent",
                },
                avatar: true,
              },
            ],
          },
        ],
      });
    }

    reset();
  };

  return (
    <form
      className="flex items-center gap-4 border-t p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name="message"
        defaultValue=""
        render={({ field: { onBlur, value, name, onChange } }) => (
          <input
            name={name}
            onBlur={onBlur}
            value={value}
            onChange={(e) => {
              onChange(e);
            }}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 min-w-0"
            placeholder="Digite sua mensagem aqui..."
          />
        )}
      />
      <button
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full w-10 h-10"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      </button>
    </form>
  );
};

export default SendMessage;
