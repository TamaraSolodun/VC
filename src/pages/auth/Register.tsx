/* eslint-disable prettier/prettier */
import { Button, Form, Input, Space } from "antd";
import type { ChangeEvent, FormEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import type {User } from "../../services/user-services";
import {addUser, getAllUsers} from "../../services/user-services";
import type { RootState } from "../../store/store";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
};



function Register() : JSX.Element{
  const [formFields, setFormFields] = useState(defaultFormFields);
  const usersState = useSelector((state: RootState) => state.users);
  const [users, setUsers] = useState(usersState.users);
  const [form] = Form.useForm();
  const resetFormFields = () : void => {
    form.resetFields();
    setFormFields(defaultFormFields);
  };

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const {value} = event.target;
    setFormFields({ ...formFields, [event.target.name]: value });
  },[formFields]);

  const fetchUsers = async (): Promise<void> => {
    try {
      const usersData = await getAllUsers();
      setUsers(usersData); 
    } catch (error) {
      console.error("Error fetching users:", error); // add dispatch setError
    }
  };

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>): void => {
    try {
      const registeredUser: User = await addUser(
        formFields.name,
        formFields.email,
        formFields.password,
      );
      resetFormFields();
      setUsers([...users, registeredUser]);
      // dispatch()
    } catch {
      alert("User Register Failed");
    }
  }, [formFields]);

  const reload = useCallback(() => {
    resetFormFields();
  },[]);

  useEffect(() => {
      fetchUsers();
  }, []);

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
          <Form onFinish={handleSubmit} form={form}>
            <Form.Item name="name">
              <Input
                placeholder="Name"
                type="text"
                required
                name="name"
                value={formFields.name}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item name="email">
              <Input
                placeholder="Email"
                type="email"
                required
                name="email"
                value={formFields.email}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item name="password">
              <Input
                placeholder="Password"
                type="password"
                required
                name="password"
                value={formFields.password}
                onChange={handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Space>
                <button type="submit">Register</button>
                <Button onClick={reload}>Clear</Button>
              </Space>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </div>
  );
}

export default Register;
