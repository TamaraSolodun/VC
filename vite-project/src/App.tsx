import { asideItems } from "./assets/lists";
import Breadcrumbs from "./components/Breadcrumbs";
import LayoutAside from "./components/LayoutAside";
import LayoutHeader from "./components/LayoutHeader";
import MainContent from "./components/MainContent";
import "./styles/App.css";

import { Layout, theme } from "antd";

function App() {

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh" }}>
      <LayoutHeader />
      <Layout>
        <LayoutAside
          asideItems={asideItems}
          colorBgContainer={colorBgContainer}
        />
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumbs />
          <MainContent colorBgContainer={colorBgContainer}/>
        </Layout>
      </Layout>
    </Layout>
  );
}
export default App;
