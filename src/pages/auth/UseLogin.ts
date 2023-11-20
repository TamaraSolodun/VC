import { Form } from "antd";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { defaultFormFields } from "../../assets/variables";
import type { RootState } from "../../store/store";
import { getUser } from "../../store/users/actions";

export default function UseLogin() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [form] = Form.useForm();
  const user = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resetFormFields = (): void => {
    form.resetFields();
  };
  const reload = useCallback(() => {
    resetFormFields();
  }, []);

  const handleSubmit = useCallback(async (): Promise<void> => {
    try {
      dispatch(getUser(formFields.email, formFields.password));
      resetFormFields();
      navigate(`/rooms`);
    } catch {
      alert("User Sign In Failed");
    }
  }, [formFields]);

  return { handleSubmit, form, formFields, setFormFields, reload, user };
}
