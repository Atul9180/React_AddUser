import React from "react";
import Card from "@/components/UI/Card";

const UserItem = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            Name: {user.name} ,College: {user.college} ,Age: ({user.age} years
            old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserItem;
