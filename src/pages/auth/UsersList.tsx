import type { UsersListProperties } from "../../assets/variables";

function UserList({ users }: { users: UsersListProperties }): JSX.Element {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

export default UserList;
