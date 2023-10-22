import { Button, Form, Input, Space } from "antd";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

// localstorage setItem (key, value, date)
// getItem(key, value, validUntil(past - delete, future -return))
// zod for check
import { getUser } from "../../utils/data-utils";

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

function Login() {
  const [user, setUser] = useState<User | null>();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res: User = await getUser(
        "http://localhost:8000/login",
        email,
        password,
      );
      setUser(res);
      resetFormFields();
    } catch {
      alert("User Sign In Failed");
    }
  };

  const reload = () => {
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
