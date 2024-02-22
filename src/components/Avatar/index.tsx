import Image from "next/image";
import { FC } from "react";

import { twMerge } from "tailwind-merge";

import { AvatarProps } from "@/interfaces/Chat";

export const Avatar: FC<AvatarProps> = (image) => {
  return (
    <Image
      alt={image.alt}
      height={image.size}
      width={image.size}
      src={image.src}
      className={twMerge(
        "aspect-w-10 aspect-h-10 object-cover",
        image?.className
      )}
    />
  );
};
