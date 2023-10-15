/* eslint-disable prettier/prettier */
/* eslint-disable react-perf/jsx-no-new-array-as-prop */
/* eslint-disable react-perf/jsx-no-new-object-as-prop */
/* eslint-disable react-perf/jsx-no-jsx-as-prop */
/* eslint-disable react-perf/jsx-no-new-function-as-prop */
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Tooltip } from "antd";
import type { JSX } from "react/jsx-dev-runtime";
import { useDispatch, useSelector } from "react-redux";

// eslint-disable-next-line import/no-extraneous-dependencies
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { setRoomName } from "../../store/RoomSlice";
import type { RootState } from "../../store/store";
import { setUserName } from "../../store/UserSlice";

// eslint-disable-next-line react/require-default-props
function CreateRoom(): JSX.Element {
  const dispatch = useDispatch();

  const roomName = useSelector((state: RootState) => state.room.roomName);
  const userName = useSelector((state: RootState) => state.user.userName);


  const handleRoomNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const encodedRoomName = event.target.value;
    dispatch(setRoomName(encodedRoomName));
  };

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const encodedUserName = event.target.value;
    dispatch(setUserName(encodedUserName));
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
              value={userName}
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
              value={roomName}
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
