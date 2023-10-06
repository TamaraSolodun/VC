import { Breadcrumb } from "antd";
import type { JSX } from "react/jsx-runtime";

import { breadcrumbItemsList } from "../assets/lists";

export default function Breadcrumbs(): JSX.Element {
  return (
    <Breadcrumb style={{ margin: "16px 0" }} items={breadcrumbItemsList} />
  );
}
