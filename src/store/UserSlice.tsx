import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  userName: string;
  isOnCall: boolean;
}

const initialState: UserState = {
  userName: "",
  isOnCall: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setIsOnCall: (state, action: PayloadAction<boolean>) => {
      state.isOnCall = action.payload;
    },
  },
});

export const { setUserName, setIsOnCall } = UserSlice.actions;

export default UserSlice.reducer;
