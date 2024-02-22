import { FC } from "react";

import { Avatar } from "@/components/Avatar";
import { UserSchema } from "@/interfaces/Chat";

export const Header: FC<UserSchema> = ({ name, avatar }) => {
  return (
    <header className="flex items-center p-4 border-b">
      <div className="flex items-center space-x-4">
        <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <Avatar
            alt={avatar?.alt}
            size={avatar?.size}
            src={avatar?.src}
            className={avatar?.className}
          />
        </span>
        <h1 className="text-xl font-bold">{name}</h1>
      </div>
    </header>
  );
};
