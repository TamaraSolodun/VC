import "@total-typescript/ts-reset/fetch";
import { createAsyncThunk } from "@reduxjs/toolkit";

import type { User } from "../assets/variables";
import { userResponseSchema, userSchema } from "../assets/variables";

export const fetchUsers = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async (): Promise<User[]> => {
    const result = await fetch(`http://localhost:8000/api/users`, {
      method: "GET",
    });
    const usersJson = await result.json();
    const validatedUsers: User[] = userResponseSchema.parse(usersJson);
    return validatedUsers;
  },
);

export const addUser = createAsyncThunk<
  User,
  { id: number; name: string; email: string; password: string }
>(
  "users/addUser",
  async ({
    id,
    name,
    email,
    password,
  }: {
    id: number;
    name: string;
    email: string;
    password: string;
  }): Promise<User> => {
    const result = await fetch(`http://localhost:8000/api/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id, name, email, password }),
    });
    const userJson = await result.json();
    const validatedUser: User = userSchema.parse(userJson);
    return validatedUser;
  },
);

export const getUser = createAsyncThunk<
  User,
  { email: string; password: string }
>(
  "user/getUser",
  async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User> => {
    try {
      const result = await fetch(`http://localhost:8000/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!result.ok) {
        throw new Error("Failed to fetch user data");
      }

      const userJson = await result.json();
      const validatedUser: User = userSchema.parse(userJson);
      return validatedUser;
    } catch {
      throw new Error(`Error fetching user data`);
    }
  },
);
