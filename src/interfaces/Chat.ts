import { MessageSchema } from "./Message";

export interface ChatSchema {
  chats: ChatProps[];
}

export interface ChatProps {
  id: string;
  messages: MessageSchema[];
}

export interface UserSchema {
  name: string;
  avatar: AvatarProps;
}

export interface AvatarProps {
  alt: string;
  size: number;
  src: string;
  className?: string;
}
