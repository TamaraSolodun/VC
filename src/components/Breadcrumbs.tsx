import { Breadcrumb } from "antd";
import type { JSX } from "react/jsx-runtime";

import { breadcrumbItemsList } from "../assets/lists";

const breadCrumbStyle = { margin: "16px 0" };

export default function Breadcrumbs(): JSX.Element {
  return <Breadcrumb style={breadCrumbStyle} items={breadcrumbItemsList} />;
}
