import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./users/UsersSlice";
import userReducer from "./user/UserSlice";
import roomReducer from "./room/RoomSlice";

export const store = configureStore({
  reducer: {
    usersReducer,
    userReducer,
    roomReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
