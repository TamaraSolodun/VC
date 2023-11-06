/* eslint-disable prettier/prettier */
import '@total-typescript/ts-reset/fetch';
import { z } from "zod";


export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
});
export const userResponseSchema = z.array(userSchema);

export type User = z.infer<typeof userSchema>;

// export const getAllUsers = async (): Promise<User[]> => {
//   const result = await fetch(`${API_URL}/api/users`, {
//     method: "GET",
//   });
//   const usersJson = (await result.json());
//   const validatedUsers: User[] = allUserResponseSchema.parse(usersJson);
//   return validatedUsers;
// };

