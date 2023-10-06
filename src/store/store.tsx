import { configureStore } from "@reduxjs/toolkit";

import roomReducer from "./RoomSlice";
import userReducer from "./UserSlice";

export const store = configureStore({
  reducer: {
    room: roomReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
