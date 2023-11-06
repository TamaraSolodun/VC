import { combineReducers } from "redux";

import roomReducer from "./room/RoomSlice";
import userReducer from "./user/UserSlice";
import usersReducer from "./users/UsersSlice";

const rootReducer = combineReducers({
  room: roomReducer,
  user: userReducer,
  users: usersReducer,
});

export default rootReducer;
