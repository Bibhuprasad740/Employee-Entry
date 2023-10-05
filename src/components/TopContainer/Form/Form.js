import React, { useState } from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  function addEmployeeHandler(event) {
    event.preventDefault();
    if (name.trim().length == 0 || age.trim().length == 0) {
      console.log("Invalid input");
      return;
    }
    if (parseInt(age.trim()) < 0) {
      console.log("Invalid age data!!");
      return;
    }
    const enteredEmployeeData = {
      name: name,
      age: age,
      id: Math.random(),
    };
    props.onAddEmployee(enteredEmployeeData);
  }
  return (
    <div className={classes["form-container"]}>
      <form onSubmit={addEmployeeHandler}>
        <div className={classes.action}>
          <label htmlFor="">Enter Your Name</label> <br />
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={classes.action}>
          <label htmlFor="">Enter Your Age</label>
          <br />
          <input
            type="text"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
