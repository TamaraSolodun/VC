import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export interface RoomState {
  roomName: string;
}

const initialState: RoomState = {
  roomName: "",
};

export const RoomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setRoomName: (state, action: PayloadAction<string>) => {
      state.roomName = action.payload;
    },
  },
});

export const { setRoomName } = RoomSlice.actions;
export const roomSelector = (state: RootState) => state.roomReducer;

export default RoomSlice.reducer;
