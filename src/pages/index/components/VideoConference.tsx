import React from "react";
import { Button, Input, Space, Tooltip } from "antd";
import { useState } from "react";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { JitsiMeeting } from "@jitsi/react-sdk";

//can use ZOD
//eslint react hooks
//useCallback vs useMemo
//why did you render add (memo(({prop}) => </>)

const JITSI_CONFIG_OWERWRITE = {
  startWithAudioMuted: true,
  disableModeratorIndicator: true,
  startScreenSharing: true,
  enableEmailInStats: false,
};

const VideoConference: React.FC = () => {
  const [displayNamee, setDisplayNamee] = useState("");
  const [roomName, setRoomName] = useState("");
  const [onCall, setOnCall] = useState(false);


  //розбити component на 2 
  //перейменувати isOnCall

  return (
    <>
      {onCall ? (
        <JitsiMeeting
          roomName={roomName}
          //literal object
          configOverwrite={JITSI_CONFIG_OWERWRITE}
          interfaceConfigOverwrite={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          }}
          getIFrameRef={(iframeRef: { style: { height: string } }) => {
            iframeRef.style.height = "100%";
          }} //винести callback
        />
      ) : (
        <>
          <h1>Crate a Meeting</h1>
          <Space direction="horizontal">
            <Input
              placeholder="Enter your username"
              prefix={<UserOutlined className="site-form-item-icon" />}
              allowClear
              value={displayNamee}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setDisplayNamee(e.target.value)
              }
              //useCallback here
              //components to MEMO

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
            <Input
              placeholder="Input room number"
              allowClear
              value={roomName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                setRoomName(e.target.value)
              }
            />
            <Button onClick={(): void => setOnCall(true)}>
              {" "}
              Let&apos;s start!
            </Button>
          </Space>
        </>
      )}
    </>
  );
};

export default VideoConference;
