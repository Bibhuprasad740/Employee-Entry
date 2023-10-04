import React from "react";
import classes from "./BottomContainer.module.css";
import Employee from "./Employee";

const BottomContainer = (props) => {
  return (
    <div className={classes["bottom-container"]}>
      <Employee />
      <Employee />
      <Employee />
      <Employee />
      <Employee />
      <Employee />
      <Employee />
    </div>
  );
};

export default BottomContainer;
