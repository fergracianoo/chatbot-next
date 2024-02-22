import { z } from "zod";

export const SendMessageSchema = z.object({
  message: z.string().min(1),
});

export type SendMessageProps = z.infer<typeof SendMessageSchema>;
