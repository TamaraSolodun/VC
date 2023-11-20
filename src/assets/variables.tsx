export const defaultFormFields = {
  name: "",
  email: "",
  password: "",
};

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface UsersListProperties {
  users: User[];
}
