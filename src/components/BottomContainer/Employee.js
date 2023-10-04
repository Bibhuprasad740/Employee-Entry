import React from "react";
import classes from "./Employee.module.css";
import Age from "./Age";
import Name from "./Name";

const Employee = (props) => {
  return (
    <li className={classes.employee}>
      <Age />
      <Name />
    </li>
  );
};

export default Employee;
