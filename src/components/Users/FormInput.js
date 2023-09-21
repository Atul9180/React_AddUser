import React, { useState, useRef } from "react";
import "@/components/Users/FormInput.css";
import Card from "@/components/UI/Card";
import Button from "@/components/UI/Button";
import ErrorModel from "@/components/UI/ErrorModel";

const FormInput = (props) => {
  // useRef by default they are undefined.It is of object DataType
  // and has "current" prop always holding actual value of connected prop
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeNameInputRef = useRef();
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserCollegeName = collegeNameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserCollegeName.trim().length === 0 ||
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

    props.onAddUser(enteredUserName, enteredUserCollegeName, enteredUserAge);
    nameInputRef.current.value = "";
    collegeNameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
            <input id="username" type="text" ref={nameInputRef} required />
          </div>
          <div className="formControlInput">
            <label htmlFor="collegename">College_Name</label>
            <input
              id="collegename"
              type="text"
              ref={collegeNameInputRef}
              required
            />
          </div>
          <div className="formControlInput">
            <label htmlFor="age">Age(Years)</label>
            <input id="age" type="text" ref={ageInputRef} required />
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
