import React, { useEffect } from "react";
import { Button, Input, Space, Tooltip } from "antd";
import { useState } from "react";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { JitsiMeeting } from "@jitsi/react-sdk";
//can use ZOD

const VideoConference: React.FC = () => {
  const [displayNamee, setDisplayNamee] = useState("");
  const [roomName, setRoomName] = useState("");
  const [onCall, setOnCall] = useState(false);

  useEffect(() => {
    console.log("onCall has changed:", onCall);
    return () => {
      // Cleanup logic here...
    };
  }, [onCall]);

  return (
    <>
      {onCall ? (
        // <Jitsi
        // roomName={roomName}
        // displayName={displayName}
        // containerStyle={{height: '100%', width: '100%' }}
        // />
        <JitsiMeeting
          roomName={roomName}
          configOverwrite={{
            startWithAudioMuted: true,
            disableModeratorIndicator: true,
            startScreenSharing: true,
            enableEmailInStats: false,
          }}
          interfaceConfigOverwrite={{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          }}

          getIFrameRef={(iframeRef: { style: { height: string } }) => {
            iframeRef.style.height = "100%";
          }}
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
