import { Button, Form, Input, Space } from "antd";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { getUser } from "../../services/user-services";

// localstorage setItem (key, value, date)
// getItem(key, value, validUntil(past - delete, future -return))
// zod for check

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const defaultFormFields = {
  email: "",
  password: "",
};

function Login(): JSX.Element {
  const [user, setUser] = useState<User | null>();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = (): void => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    try {
      const result: User = await getUser(
        "http://localhost:8000/login",
        email,
        password,
      );
      setUser(result);
      resetFormFields();
    } catch {
      alert("User Sign In Failed");
    }
  };

  const reload = (): void => {
    setUser(null);
    resetFormFields();
  };

  return (
    <div className="App-header">
      <h1>{user && `Welcome! ${user.name}`}</h1>
      <div className="card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
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
              <button type="submit">Sign In</button>
              <Button onClick={reload}>Clear</Button>
            </Space>
          </Form.Item>
        </form>
      </div>
    </div>
  );
}

export default Login;
