export const resetFormFields = (form): void => {
  form.resetFields();
};

export const handleSubmit = useCallback(async (): Promise<void> => {
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
