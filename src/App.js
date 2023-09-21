import React, { useState } from "react";
import FormInput from "@/components/Users/FormInput";
import UserItem from "@/components/Users/UserItem";
import "./styles.css";

export default function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uCollegeName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          college: uCollegeName,
          age: uAge,
          id: Math.random().toString()
        }
      ];
    });
  };

  return (
    <div className="App">
      <FormInput onAddUser={addUserHandler} />
      <UserItem users={usersList} />
    </div>
  );
}
