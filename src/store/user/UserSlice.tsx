import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";
import { getUser } from "../../services/user-services";
import { User } from "../../assets/variables";

export interface UserState {
  loading: boolean;
  user: User;
  userName: string;
  isOnCall: boolean;
  error: string | undefined;
}

const loadUserState = (): UserState | undefined => {
  try {
    const serializedState = localStorage.getItem("userState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as UserState;
  } catch (error) {
    console.error("Error loading user state:", error);
    return undefined;
  }
};

const saveUserState = (state: UserState): void => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("userState", serializedState);
};

const initialState: UserState = loadUserState() ?? {
  loading: false,
  user: { id: 0, name: "", email: "", password: "" },
  error: "",
  userName: "",
  isOnCall: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      saveUserState(state);
    },
    setIsOnCall: (state, action: PayloadAction<boolean>) => {
      state.isOnCall = action.payload;
      saveUserState(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.userName = action.payload.name;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setUserName, setIsOnCall } = UserSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;

export default UserSlice.reducer;
