import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

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

export default RoomSlice.reducer;
