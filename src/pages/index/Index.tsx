import { Content } from "antd/es/layout/layout";
import React from "react";

import VideoConference from "../video-conference/VideoConference";

export default function Index({
  colorBgContainer,
}: {
  colorBgContainer: string;
}): React.ReactElement {
  return (
    <Content
      style={{
        padding: 24,
        margin: 0,
        height: "100%",
        minHeight: "500px",
        background: colorBgContainer,
      }}
    >
      <VideoConference />
    </Content>
  );
}
