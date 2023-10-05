import React from "react";
import classes from "./BottomContainer.module.css";
import Employee from "./Employee";

const BottomContainer = (props) => {
  return (
    <div className={classes["bottom-container"]}>
      {props.employees.map((employee) => (
        <Employee key={employee.id} data={employee} />
      ))}
    </div>
  );
};

export default BottomContainer;
