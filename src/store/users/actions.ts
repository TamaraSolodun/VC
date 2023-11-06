import type { Dispatch } from "redux";

import type { RootState } from "../store";
import { userResponseSchema, userSchema } from "../../services/user-services";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface GetUserRequestAction {
  type: typeof GET_USER_REQUEST;
}

interface GetUserSuccessAction {
  type: typeof GET_USER_SUCCESS;
  data: User;
}

interface GetUserFailureAction {
  type: typeof GET_USER_FAILURE;
  error: string;
}

interface GetUsersRequestAction {
  type: typeof GET_USERS_REQUEST;
}

interface GetUsersSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  data: User[];
}

interface GetUsersFailureAction {
  type: typeof GET_USERS_FAILURE;
  error: string;
}

interface AddUserRequestAction {
  type: typeof ADD_USER_REQUEST;
}

interface AddUserSuccessAction {
  type: typeof ADD_USER_SUCCESS;
  data: User;
}

interface AddUserFailureAction {
  type: typeof ADD_USER_FAILURE;
  error: string;
}

export type UserActionTypes =
  | AddUserFailureAction
  | AddUserRequestAction
  | AddUserSuccessAction
  | GetUserFailureAction
  | GetUserRequestAction
  | GetUsersFailureAction
  | GetUsersRequestAction
  | GetUsersSuccessAction
  | GetUserSuccessAction;

export const fetchUsers = () => {
  return async (
    dispatch: Dispatch<UserActionTypes>,
    getState: () => RootState,
  ) => {
    dispatch({ type: GET_USERS_REQUEST });

    try {
      const response = await fetch("http://localhost:8000/api/users", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const users = await response.json();
      const validatedUsers: User[] =  userResponseSchema.parse(users);

      dispatch({ type: GET_USERS_SUCCESS, data: validatedUsers });
    } catch (error) {
      dispatch({ type: GET_USERS_FAILURE, error: error.message });
    }
  };
};

export const addUser = (name: string, email: string, password: string) => {
  return async (
    dispatch: Dispatch<UserActionTypes>,
    getState: () => RootState,
  ) => {
    dispatch({ type: ADD_USER_REQUEST });

    try {
      const response = await fetch(`http://localhost:8000/api/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      const validatedUser: User =  userSchema.parse(result);

      dispatch({ type: ADD_USER_SUCCESS, data: validatedUser });
    } catch (error) {
      dispatch({ type: ADD_USER_FAILURE, error: error.message });
    }
  };
};

export const getUser = (email: string, password: string) => {
  return async (
    dispatch: Dispatch<UserActionTypes>,
    getState: () => RootState,
  ) => {
    dispatch({ type: ADD_USER_REQUEST });

    try {
      const response = await fetch(`http://localhost:8000/api/users`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      const validatedUser: User =  userSchema.parse(result);

      dispatch({ type: GET_USER_SUCCESS, data: validatedUser });
    } catch (error) {
      dispatch({ type: GET_USER_FAILURE, error: error.message });
    }
  };
};
