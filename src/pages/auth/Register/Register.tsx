/* eslint-disable prettier/prettier */
import { Button, Form, Input, Space } from "antd";

import ErrorAlert from "../../../components/ErrorAlert";
import UserList from "../UsersList";

import UseRegister from "./UseRegister";

function Register(): JSX.Element {
  const {
    users,
    loading,
    error,
    formFields,
    setFormFields,
    reload,
    handleSubmit,
    form,
  } = UseRegister();
  return (
    <div className="App-header">
      {loading && <h2>Loading...</h2>}

      <UserList users={users} />

      {error && <ErrorAlert error={error} />}
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
                onChange={(e) => {
                  setFormFields({ ...formFields, name: e.target.value });
                }}
              />
            </Form.Item>

            <Form.Item name="email">
              <Input
                placeholder="Email"
                type="email"
                required
                name="email"
                value={formFields.email}
                onChange={(e) => {
                  setFormFields({ ...formFields, email: e.target.value });
                }}
              />
            </Form.Item>

            <Form.Item name="password">
              <Input
                placeholder="Password"
                type="password"
                required
                name="password"
                value={formFields.password}
                onChange={(e) => {
                  setFormFields({ ...formFields, password: e.target.value });
                }}
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
