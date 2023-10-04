import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";

export default function LayoutAside({
  asideItems,
  colorBgContainer,
}: {
  asideItems: MenuProps["items"];
  colorBgContainer: string;
}) {
  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={asideItems}
      />
    </Sider>
  );
}
