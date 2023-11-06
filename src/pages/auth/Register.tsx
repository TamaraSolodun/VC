/* eslint-disable prettier/prettier */
import { Alert, Button, Form, Input, Space } from "antd";
import type { ChangeEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../../store/store";
import { addUser, fetchUsers } from "../../store/users/actions";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
};

function Register(): JSX.Element {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.users,
  );
  const resetFormFields = (): void => {
    form.resetFields();
  };

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const { value } = event.target;
      setFormFields({ ...formFields, [event.target.name]: value });
    },
    [formFields],
  );

  const handleSubmit = useCallback(async (): Promise<void> => {
    try {
      dispatch(addUser(formFields.name, formFields.email, formFields.password));
      resetFormFields();
    } catch {
      alert("User Register Failed");
    }
  }, [formFields]);

  const reload = useCallback(() => {
    resetFormFields();
  }, []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App-header">
      <h1>Users List</h1>
      {loading && <h2>Loading...</h2>}

      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}

      {error && (
        <Alert message="Error" description={error} type="error" showIcon />
      )}

      <div className="card">
        <h2>Sign Up</h2>
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
