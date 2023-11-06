import type { UserActionTypes } from "./actions";
import {
  ADD_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./actions";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
interface UsersState {
  data: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
};

const usersReducer = (
  state = initialState,
  action: UserActionTypes,
): UsersState => {
  switch (action.type) {
    case GET_USERS_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case GET_USERS_SUCCESS: {
      return { ...state, loading: false, data: action.data, error: null };
    }
    case GET_USERS_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }
    case GET_USER_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case GET_USER_SUCCESS: {
      return { ...state, loading: false, data: action.data, error: null };
    }
    case GET_USER_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }
    case ADD_USER_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case ADD_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...state.data, action.data],
        error: null,
      };
    }
    case ADD_USER_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
