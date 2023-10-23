import { z } from "zod";

/* eslint-disable prettier/prettier */
const API_URL = 'http://localhost:8000';

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const getUser = async (
  email: string,
  password: string,
) => {
  const result = await fetch(`${API_URL}/login`, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return result.json();
};

export const getAllUsers = async () : Promise<User[]> => {
  const result = await fetch(`${API_URL}/api/users`, {
    method: "GET",
  });
  const usersJson: User[] = await result.json() as User[];
  const validatedUsers : User[] = usersJson.map((user : User) => userSchema.parse(user));
  return validatedUsers; 
};

export const addUser = async(
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
  return await result.json() as User;
};
