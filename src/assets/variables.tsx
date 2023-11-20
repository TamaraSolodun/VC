import { z } from "zod";

export const defaultFormFields = {
  name: "",
  email: "",
  password: "",
};

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export const userResponseSchema = z.array(userSchema);

export type User = z.infer<typeof userSchema>;
