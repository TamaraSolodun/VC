/* eslint-disable import/no-extraneous-dependencies */
import { Button } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

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
      <h2>The page is developing.. Here will be your visited rooms!</h2>
      <Link to="/create-room">
        <Button type="primary" htmlType="submit">
          Create Room
        </Button>
      </Link>
    </Content>
  );
}
