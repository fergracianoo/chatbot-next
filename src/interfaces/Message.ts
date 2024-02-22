export interface MessageContentProps {
  text: string;
  messageType: "sent" | "received";
}

export interface MessageSchema {
  avatar: boolean;
  messageContent: MessageContentProps;
}
