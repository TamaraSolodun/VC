/* eslint-disable prettier/prettier */
import type { FormInstance } from "antd";
import { Button, Form } from "antd";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";

import type { RootState } from "../store/store";
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
  const roomName = useSelector((state: RootState) => state.room.roomName);

  const handleisOnCall = (): void => {
    dispatch(setIsOnCall(true));
  };

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
    <Link to={`/rooms/${btoa(roomName)}`}>
      {" "}
      <Button
        type="primary"
        htmlType="submit"
        disabled={!submittable}
        onClick={handleisOnCall}
      >
        Let&apos;s start!
      </Button>
    </Link>
  );
}
