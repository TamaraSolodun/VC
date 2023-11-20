import { Form } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { defaultFormFields } from "../../assets/variables";
import type { RootState } from "../../store/store";
import { addUser, fetchUsers } from "../../store/users/actions";

export default function UseRegister() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [form] = Form.useForm();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.users,
  );
  const dispatch = useDispatch();

  const resetFormFields = (): void => {
    form.resetFields();
  };
  const reload = useCallback(() => {
    resetFormFields();
  }, []);

  const handleSubmit = useCallback(async (): Promise<void> => {
    try {
      dispatch(addUser(formFields.name, formFields.email, formFields.password));
      resetFormFields();
    } catch {
      alert("User Register Failed");
    }
  }, [formFields]); // talon

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return {
    loading,
    data,
    error,
    formFields,
    setFormFields,
    reload,
    handleSubmit,
    form,
  };
}
