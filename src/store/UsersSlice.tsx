/* eslint-disable prettier/prettier */
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [],
};

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = UsersSlice.actions;

export default UsersSlice.reducer;
