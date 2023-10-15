/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useSelector } from "react-redux";

import type { RootState } from "../../../store/store";

const JITSI_CONFIG_OWERWRITE = {
  startWithAudioMuted: true,
  disableModeratorIndicator: true,
  startScreenSharing: true,
  enableEmailInStats: false,
};
const JITSI_INTERFACE_CONFIG_OWERWRITE = {
  DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
};

function setHeigthOfFrame(iframeReference: { style: { height: string } }): any {
  iframeReference.style.height = "100%";
  return iframeReference;
}

export default function FrameVc(): JSX.Element {
  const roomName = useSelector((state: RootState) => state.room.roomName);
  const userName = useSelector((state: RootState) => state.user.userName);

  return (
    <JitsiMeeting
      roomName={roomName}
      userInfo={{
        displayName: userName,
        email: "",
      }}
      // literal object
      configOverwrite={JITSI_CONFIG_OWERWRITE}
      interfaceConfigOverwrite={JITSI_INTERFACE_CONFIG_OWERWRITE}
      getIFrameRef={setHeigthOfFrame} // винести callback
    />
  );
}
