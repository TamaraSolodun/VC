import { Form } from "antd";
import { useCallback, useEffect, useState } from "react";

import { User, defaultFormFields } from "../../../assets/variables";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { usersSelector } from "../../../store/users/UsersSlice";
import { addUser, fetchUsers } from "../../../services/user-services";
import { useNavigate } from "react-router-dom";

export default function UseRegister() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [form] = Form.useForm();

  const selectedUsers = useAppSelector(usersSelector);

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
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
    const newUser = {
      id: selectedUsers.users.length + 1,
      name: formFields.name,
      email: formFields.email,
      password: formFields.password,
    };
    try {
      dispatch(addUser(newUser));
      resetFormFields();
      navigate("/login");
    } catch {
      alert("User Register Failed");
    }
  }, [formFields]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setLoading(selectedUsers.loading);
    setError(selectedUsers.error);
    setUsers(selectedUsers.users);
  }, [selectedUsers]);

  return {
    users,
    loading,
    error,
    formFields,
    setFormFields,
    reload,
    handleSubmit,
    form,
  };
}
