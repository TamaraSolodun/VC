// import { asideItems } from "./assets/lists";
import { Layout, theme } from "antd";
import React from "react";
import type { JSX } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";

import Breadcrumbs from "./components/Breadcrumbs";
// import LayoutAside from "./components/LayoutAside";
import LayoutHeader from "./components/Layout/LayoutHeader";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CreateRoom from "./pages/rooms/CreateRoom";
import Index from "./pages/rooms/Index";
import JoinRoom from "./pages/rooms/JoinRoom";
import VideoConference from "./pages/video-conference/VideoConference";

import "./styles/App.css";

export default function App(): JSX.Element {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <LayoutHeader />
      <Layout>
        {/* <LayoutAside
          asideItems={asideItems}
          colorBgContainer={colorBgContainer}
        /> */}
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumbs />
          <h1>Vite + React</h1>
          <Routes>
            <Route
              path="/"
              element={<Index colorBgContainer={colorBgContainer} />}
            />
            <Route path="/create-room" element={<CreateRoom />} />
            <Route path="/rooms/:roomId" element={<VideoConference />} />
            <Route path="/join/:roomId" element={<JoinRoom />} />
            <Route
              path="/rooms"
              element={<Index colorBgContainer={colorBgContainer} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </Layout>
    </Layout>
  );
}
