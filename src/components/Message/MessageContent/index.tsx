import { FC } from "react";

import { tv } from "tailwind-variants";

import { MessageContentProps } from "@/interfaces/Message";

const messageContent = tv({
  base: "rounded-lg p-4 text-sm",
  variants: {
    messageType: {
      sent: "border",
      received: "bg-gray-100 max-w-[85%] self-start",
    },
  },
});

export const MessageContent: FC<MessageContentProps> = ({
  text,
  messageType,
}) => {
  return <p className={messageContent({ messageType: messageType })}>{text}</p>;
};
