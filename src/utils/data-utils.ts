// in folder services
// file for users & rooms ...

export const getUser = async <T>(
  url: string,
  email: string,
  password: string,
): Promise<T> => {
  const res = await fetch(url, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
};

export const getAllUsers = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, {
    method: "Get",
  });

  return res.json(); // await -
};

export const addUser = async <T>(
  url: string,
  name: string,
  email: string,
  password: string,
): Promise<T> => {
  const res = await fetch(url, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  return res.json();
};
