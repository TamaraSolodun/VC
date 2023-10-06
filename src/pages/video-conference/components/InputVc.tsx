/* eslint-disable react-perf/jsx-no-new-array-as-prop */
/* eslint-disable react-perf/jsx-no-new-object-as-prop */
/* eslint-disable react-perf/jsx-no-jsx-as-prop */
/* eslint-disable react-perf/jsx-no-new-function-as-prop */
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Space, Tooltip } from "antd";
import type { JSX } from "react/jsx-dev-runtime";
import { useDispatch, useSelector } from "react-redux";

import SubmitButton from "../../../components/SubmitButton";
import { setRoomName } from "../../../store/RoomSlice";
import type { RootState } from "../../../store/store";
import { setUserName } from "../../../store/UserSlice";

function InputVc(): JSX.Element {
  const dispatch = useDispatch();
  const roomName = useSelector((state: RootState) => state.room.roomName);
  const userName = useSelector((state: RootState) => state.user.userName);

  const [form] = Form.useForm();
  return (
    <>
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
              onChange={(_event: React.ChangeEvent<HTMLInputElement>): void => {
                dispatch(setUserName(_event.target.value));
              }}
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
          <Form.Item name="Room number" rules={[{ required: true }]}>
            <Input
              placeholder="Input room number"
              allowClear
              value={roomName}
              onChange={(_event: React.ChangeEvent<HTMLInputElement>): void => {
                dispatch(setRoomName(_event.target.value));
              }}
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
    </>
  );
}
export default InputVc;
