/* eslint-disable prettier/prettier */
import { Button, Form, Input, Space } from "antd";

import ErrorAlert from "../../components/ErrorAlert";

import UseRegister from "./useRegister";
import UserList from "./UsersList";

function Register(): JSX.Element {
  const {
    loading,
    data,
    error,
    formFields,
    setFormFields,
    reload,
    handleSubmit,
    form,
  } = UseRegister();
  return (
    <div className="App-header">
      <h1>Users List</h1>
      {loading && <h2>Loading...</h2>}

      {data && <UserList users={data} />}

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
