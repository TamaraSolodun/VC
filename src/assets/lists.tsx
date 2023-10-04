import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import React from "react";

export const asideItems: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: Array.from({ length: 4 })
      .fill(null)
      .map((_, index_) => {
        const subKey = index * 4 + index_ + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
  };
});
