import { FC, ReactNode } from "react";

import { tv } from "tailwind-variants";

const messageContent = tv({
  base: "flex items-center gap-4",
  variants: {
    messageType: {
      sent: "justify-end",
      received: "",
    },
  },
});

interface MessageRoot {
  children: ReactNode;
  messageType?: "sent" | "received";
}

export const MessageRoot: FC<MessageRoot> = ({ children, messageType }) => {
  return (
    <div className={messageContent({ messageType: messageType })}>
      {children}
    </div>
  );
};
