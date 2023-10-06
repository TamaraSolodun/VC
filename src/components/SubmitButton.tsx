/* eslint-disable prettier/prettier */
import type { FormInstance } from "antd";
import { Button, Form } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setIsOnCall } from "../store/UserSlice";

export default function SubmitButton({
  form,
}: {
  form: FormInstance;
}): JSX.Element {

  const [submittable, setSubmittable] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const values = Form.useWatch([], form);
  const dispatch = useDispatch();

  const handleisOnCall = (): void => {
    dispatch(setIsOnCall(true));
  }

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      },
    );
  }, [values]);

  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={!submittable}
      onClick={handleisOnCall}
    >
      Let&apos;s start!
    </Button>
  );
}
