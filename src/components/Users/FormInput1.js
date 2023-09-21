import React, { useState, useRef } from "react";
import "@/components/Users/FormInput.css";
import Card from "@/components/UI/Card";
import Button from "@/components/UI/Button";
import ErrorModel from "@/components/UI/ErrorModel";

const FormInput = (props) => {
  // useRef by default they are undefined.It is of object DataType
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [enteredUserCollege, setEnteredUserCollege] = useState("");
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserCollege.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid name ,collegeName and age (non-empty values)."
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)."
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserCollege, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUserName("");
    setEnteredUserCollege("");
  };

  const handleNameChange = (e) => {
    setEnteredUserName(e.target.value);
  };

  const handleCollegeChange = (e) => {
    setEnteredUserCollege(e.target.value);
  };

  const handleAgeChange = (e) => {
    setEnteredUserAge(e.target.value);
  };

  const errorHandle = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModel
          onConfirm={errorHandle}
          title={error.title}
          message={error.message}
        />
      )}
      <Card>
        <form onSubmit={submitHandler}>
          <div className="formControlInput">
            <label htmlFor="username">UserName</label>
            <input
              id="username"
              type="text"
              onChange={handleNameChange}
              value={enteredUserName}
              required
            />
          </div>
          <div className="formControlInput">
            <label htmlFor="collegename">College_Name</label>
            <input
              id="collegename"
              type="text"
              value={enteredUserCollege}
              onChange={handleCollegeChange}
              required
            />
          </div>
          <div className="formControlInput">
            <label htmlFor="age">Age(Years)</label>
            <input
              id="age"
              type="text"
              onChange={handleAgeChange}
              value={enteredUserAge}
              required
            />
          </div>
          <div className="submitBtnDiv">
            <Button type={"submit"}>Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default FormInput;
