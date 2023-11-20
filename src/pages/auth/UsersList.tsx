import { Avatar, Card, List } from "antd";

import type { User } from "../../assets/variables";

function UserList({ users }: { users: User[] }): JSX.Element {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 3,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      itemLayout="horizontal"
      dataSource={users}
      renderItem={(user, index) => (
        <List.Item>
          <Card title={user.name}>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                />
              }
              title={<a href="https://ant.design">{user.name}</a>}
              description={user.email}
            />
          </Card>
        </List.Item>
      )}
    />
  );
}

export default UserList;
