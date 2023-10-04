import Search, { SearchProps } from "antd/es/input/Search";
import { Header } from "antd/es/layout/layout";

const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

export default function LayoutHeader() {
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
