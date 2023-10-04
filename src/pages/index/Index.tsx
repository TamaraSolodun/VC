import { Content } from "antd/es/layout/layout";

import VideoConference from "./components/VideoConference";

export default function Index({
  colorBgContainer,
}: {
  colorBgContainer: string;
}) {
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
