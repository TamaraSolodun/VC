import { Button, Form, Input, Space } from "antd";
import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";

import FormInput from "../../components/FormInput/form-input";
import { addUser, getAllUsers } from "../../utils/data-utils";

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

function Register() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password } = formFields;
  const [users, setUsers] = useState([]);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const fetchUsers = async () => {
    try {
      const usersData = await getAllUsers("http://localhost:8000/api/users");
      console.log(usersData);
      setUsers(usersData); // add zod
    } catch (error) {
      console.error("Error fetching users:", error); // add dispatch setError
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res: User = await addUser(
        "http://localhost:8000/api/users",
        name,
        email,
        password,
      );
      console.log(res);
      resetFormFields();
    } catch {
      alert("User Register Failed");
    }
  };

  const reload = () => {
    resetFormFields();
  };

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
