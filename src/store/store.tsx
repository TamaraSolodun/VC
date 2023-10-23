import { configureStore } from "@reduxjs/toolkit";

import roomReducer from "./RoomSlice";
import userReducer from "./UserSlice";
import usersReducer from "./UsersSlice";

export const store = configureStore({
  reducer: {
    room: roomReducer,
    user: userReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
