import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  userName: string;
  isOnCall: boolean;
}

const loadUserState = (): UserState | undefined => {
  try {
    const serializedState = localStorage.getItem("userState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch {
    return undefined;
  }
};

const saveUserState = (state: UserState) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("userState", serializedState);
};

const initialState: UserState = loadUserState() ?? {
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
});

export const { setUserName, setIsOnCall } = UserSlice.actions;

export default UserSlice.reducer;
