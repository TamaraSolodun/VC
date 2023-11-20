/* eslint-disable prettier/prettier */
/* eslint-disable react-perf/jsx-no-new-array-as-prop */
/* eslint-disable react-perf/jsx-no-new-object-as-prop */
/* eslint-disable react-perf/jsx-no-jsx-as-prop */
/* eslint-disable react-perf/jsx-no-new-function-as-prop */
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Tooltip } from "antd";
import type { JSX } from "react/jsx-dev-runtime";

import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { roomSelector, setRoomName } from "../../store/room/RoomSlice";
import { setUserName, userSelector } from "../../store/user/UserSlice";

function CreateRoom(): JSX.Element {
  const dispatch = useAppDispatch();
  const room = useAppSelector(roomSelector);
  const user = useAppSelector(userSelector);

  const handleRoomNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const encodedRoomName = event.target.value;
    dispatch(setRoomName(encodedRoomName));
  };

  const handleUserNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const encodedUserName = event.target.value;
    dispatch(setUserName(encodedUserName)); // onSubmit
  };

  const [form] = Form.useForm();
  return (
    <div style={{ height: "100%" }}>
      <h1>Crate a Meeting</h1>
      <Space direction="horizontal">
        <Form
          form={form}
          name="validateOnly"
          layout="horizontal"
          autoComplete="off"
        >
          <Form.Item name="username" rules={[{ required: true }]}>
            <Input
              placeholder="Enter your username"
              prefix={<UserOutlined className="site-form-item-icon" />}
              allowClear
              value={user.userName}
              onChange={handleUserNameChange}
              // useCallback here
              // components to MEMO
              suffix={
                <Tooltip title="This name will be visible for other guests">
                  <InfoCircleOutlined
                    style={{
                      color: "rgba(0,0,0,.45)",
                    }}
                  />
                </Tooltip>
              }
            />
          </Form.Item>
          <Form.Item name="roomnumber" rules={[{ required: true }]}>
            <Input
              placeholder="Input room number"
              allowClear
              value={room.roomName}
              onChange={handleRoomNameChange}
            />
          </Form.Item>
          <Form.Item>
            <Space>
              <SubmitButton form={form} />
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
}
export default CreateRoom;
