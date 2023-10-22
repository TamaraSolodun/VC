import { Button, Form, Input, Space } from "antd";
import type { ChangeEvent, FormEvent } from "react";
import { useCallback, useEffect, useState } from "react";

import { addUser, getAllUsers } from "../../services/user-services";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
};

function Register(): JSX.Element {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password } = formFields;
  const [users, setUsers] = useState([]);

  const resetFormFields = (): void => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { type, value } = event.target;
    setFormFields({ ...formFields, [type]: value });
  };

  const fetchUsers = async (): Promise<void> => {
    try {
      const usersData = await getAllUsers("http://localhost:8000/api/users");
      console.log(usersData);
      setUsers(usersData); // add zod
    } catch (error) {
      console.error("Error fetching users:", error); // add dispatch setError
    }
  };

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();
      try {
        const result: User = await addUser(
          "http://localhost:8000/api/users",
          name,
          email,
          password,
        );
        console.log(result);
        resetFormFields();
      } catch {
        alert("User Register Failed");
      }
    },
    [],
  );

  const reload = useCallback(() => {
    resetFormFields();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [users]);

  return (
    <div className="App-header">
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <div className="card">
        <h2>Sign In</h2>
        <Space direction="horizontal">
          <form onSubmit={handleSubmit}>
            <Form.Item name="name">
              <Input
                placeholder="Name"
                type="text"
                required
                name="name"
                value={name}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item name="email">
              <Input
                placeholder="Email"
                type="email"
                required
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item name="password">
              <Input
                placeholder="Password"
                type="password"
                required
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Space>
                <button type="submit">Register</button>
                <Button onClick={reload}>Clear</Button>
              </Space>
            </Form.Item>
          </form>
        </Space>
      </div>
    </div>
  );
}

export default Register;
