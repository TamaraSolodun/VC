import { Form } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { defaultFormFields } from "../../../assets/variables";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { userSelector } from "../../../store/user/UserSlice";
import { getUser } from "../../../services/user-services";

export default function UseLogin() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [form] = Form.useForm();
  const user = useAppSelector(userSelector);
  const [error, setError] = useState<string | undefined>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const resetFormFields = (): void => {
    form.resetFields();
  };
  const reload = useCallback(() => {
    resetFormFields();
  }, []);

  const handleSubmit = useCallback(async (): Promise<void> => {
    const loginData = {
      email: formFields.email,
      password: formFields.password,
    };
    try {
      dispatch(getUser(loginData));
    } catch {
      alert("User Sign In Failed");
      setError(user.error);
    }
    resetFormFields();
    setTimeout(() => {
      navigate(`/rooms`);
    }, 3000);
  }, [formFields]);

  useEffect(() => {
    setError(user.error);
  }, [user]);

  return { handleSubmit, form, formFields, setFormFields, reload, user, error };
}
