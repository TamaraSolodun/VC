/* eslint-disable prettier/prettier */
import { Button, Form, Input, Space } from "antd";
import type { ChangeEvent, FormEvent } from "react";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../../store/store";
import { getUser } from "../../store/users/actions";
import { useNavigate } from "react-router-dom";

// localstorage setItem (key, value, date)
// getItem(key, value, validUntil(past - delete, future -return))
// zod for check


const defaultFormFields = {
  email: "",
  password: "",
};

function Login(): JSX.Element {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const user = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const resetFormFields = (): void => {
    setFormFields(defaultFormFields);
  };

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = event.target;
      console.log({ ...formFields, [name]: value });
      setFormFields({ ...formFields, [name]: value });
    },
    [formFields],
  );

  const handleSubmit = useCallback(async (): Promise<void> => {
    try {
      dispatch(getUser(formFields.email, formFields.password));
      resetFormFields();
      navigate(`/rooms`);
      
    } catch {
      alert("User Sign In Failed");
    }
  }, [formFields]);

  const reload = (): void => {
    resetFormFields();
  };

  return (
    <div className="App-header">
      <h1>{user && `Welcome! ${user.data}`}</h1>
      <div className="card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
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
