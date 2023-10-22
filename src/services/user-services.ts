/* eslint-disable prettier/prettier */
export const getUser = async <T>(
  url: string,
  email: string,
  password: string,
): Promise<T> => {
  const result = await fetch(url, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return result.json() as Promise<T>;
};

export const getAllUsers = async <T>(url: string): Promise<T> => {
  const result = await fetch(url, {
    method: "Get",
  });

  return result.json() as Promise<T>; // await -
};

export const addUser = async <T>(
  url: string,
  name: string,
  email: string,
  password: string,
): Promise<T> => {
  const result = await fetch(url, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  return result.json() as Promise<T>;
};
