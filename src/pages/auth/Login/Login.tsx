import { Button, Form, Input, Space } from "antd";

import ErrorAlert from "../../../components/ErrorAlert";
import Message from "../../../components/Message";

import UseLogin from "./UseLogin";

// localstorage setItem (key, value, date)
// getItem(key, value, validUntil(past - delete, future -return))

function Login(): JSX.Element {
  const { handleSubmit, form, formFields, setFormFields, reload, user, error } =
    UseLogin();

  return (
    <div className="App-header">
      <h1>{user && `Welcome! ${user.userName}`}</h1>
      {error && <ErrorAlert error={error} />}
      <div className="card">
        <h2>Sign In</h2>
        <Space direction="horizontal">
          <Form onFinish={handleSubmit} form={form}>
            <Form.Item name="email">
              <Input
                placeholder="Email"
                type="email"
                required
                name="email"
                value={formFields.email}
                onChange={(event) => {
                  setFormFields({ ...formFields, email: event.target.value });
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
                onChange={(event) => {
                  setFormFields({
                    ...formFields,
                    password: event.target.value,
                  });
                }}
              />
            </Form.Item>
            <Form.Item>
              <Space>
                <button type="submit">Sign In</button>
                <Button onClick={reload}>Clear</Button>
              </Space>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </div>
  );
}

export default Login;
