import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

import { addUser, fetchUsers } from "../../services/user-services";
import { User } from "../../assets/variables";

export interface UserState {
  loading: boolean;
  users: Array<User>;
  error: string | undefined;
}
const initialState: UserState = {
  loading: false,
  users: [],
  error: undefined,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = [...state.users, action.payload];
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export const {} = userSlice.actions;
export const usersSelector = (state: RootState) => state.usersReducer;
export default userSlice.reducer;
