// import { asideItems } from "./assets/lists";
import { Layout, theme } from "antd";

import Breadcrumbs from "./components/Breadcrumbs";
// import LayoutAside from "./components/LayoutAside";
import LayoutHeader from "./components/LayoutHeader";
import Index from "./pages/index/Index";

import "./styles/App.css";

function App() {
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
          <Index colorBgContainer={colorBgContainer} />
        </Layout>
      </Layout>
    </Layout>
  );
}
export default App;
