/* eslint-disable prettier/prettier */
import '@total-typescript/ts-reset/fetch';
import { z } from "zod";

const API_URL = "http://localhost:8000";


const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
});
const allUserResponseSchema = z.array(userSchema);

export type User = z.infer<typeof userSchema>;

export const getUser = async (
  email: string,
  password: string,
): Promise<User> => {
  const result = await fetch(`${API_URL}/login`, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return (await result.json()) as User;
};


export const getAllUsers = async (): Promise<User[]> => {
  const result = await fetch(`${API_URL}/api/users`, {
    method: "GET",
  });
  const usersJson = (await result.json());
  const validatedUsers: User[] = allUserResponseSchema.parse(usersJson);
  return validatedUsers;
};

export const addUser = async (
  name: string,
  email: string,
  password: string,
): Promise<User> => {
  const result = await fetch(`${API_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  return (await result.json()) as User;
};
