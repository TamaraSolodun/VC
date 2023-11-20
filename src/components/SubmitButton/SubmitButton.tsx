/* eslint-disable prettier/prettier */
import type { FormInstance } from "antd";
import { Button, Form } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { roomSelector } from "../../store/room/RoomSlice";
import { setIsOnCall } from "../../store/user/UserSlice";

export default function SubmitButton({
  form,
}: {
  form: FormInstance;
}): JSX.Element {
  const [submittable, setSubmittable] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const values = Form.useWatch([], form);
  const dispatch = useAppDispatch();
  const room = useAppSelector(roomSelector);
  const navigate = useNavigate();

  const handleisOnCall = (): void => {
    dispatch(setIsOnCall(true));
    navigate(`/rooms/${btoa(room.roomName)}`);
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
    <Button
      name="Submit"
      type="primary"
      htmlType="submit"
      disabled={!submittable}
      onClick={handleisOnCall}
    >
      Let&apos;s start!
    </Button>
  );
}
