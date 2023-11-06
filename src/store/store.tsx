import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import type { ThunkMiddleware } from "redux-thunk";
import thunk from "redux-thunk";

import rootReducer from "./reducer";

const middleware: [ThunkMiddleware] = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
