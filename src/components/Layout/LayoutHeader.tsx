import type { SearchProps } from "antd/es/input/Search";
import Search from "antd/es/input/Search";
import { Header } from "antd/es/layout/layout";
import type { JSX } from "react/jsx-runtime";

const onSearch: SearchProps["onSearch"] = (value, _event, info) => {
  console.log(info?.source, value);
};

export default function LayoutHeader(): JSX.Element {
  return (
    <Header
      style={{ display: "flex", alignItems: "center", justifyContent: "end" }}
    >
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </Header>
  );
}
