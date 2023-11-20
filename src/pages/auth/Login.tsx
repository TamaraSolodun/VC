/* eslint-disable prettier/prettier */
import { Button, Form, Input, Space } from "antd";

import UseLogin from "./useLogin";

// localstorage setItem (key, value, date)
// getItem(key, value, validUntil(past - delete, future -return))


function Login(): JSX.Element {
  const {
    handleSubmit,
    form,
    formFields,
    setFormFields,
    reload,
    user
  } = UseLogin();

  return (
    <div className="App-header">
      <h1>{user && `Welcome! ${user.data}`}</h1>
      <div className="card">
        <h2>Sign In</h2>
        <Form onFinish={handleSubmit} form={form}>
          <Form.Item name="email">
            <Input
              placeholder="Email"
              type="email"
              required
              name="email"
              value={formFields.email}
              onChange={(e) => { setFormFields({ ...formFields, email: e.target.value }) }}
            />
          </Form.Item>
          <Form.Item name="password">
            <Input
              placeholder="Password"
              type="password"
              required
              name="password"
              value={formFields.password}
              onChange={(e) => { setFormFields({ ...formFields, password: e.target.value }) }}
            />
          </Form.Item>
          <Form.Item>
            <Space>
              <button type="submit">Sign In</button>
              <Button onClick={reload}>Clear</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
