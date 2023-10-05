import React from "react";
import classes from "./Age.module.css";

const Age = (props) => {
  return (
    <div className={classes.age}>
      <p>{`${props.age} Years`}</p>
      {/* <p>Years</p> */}
    </div>
  );
};

export default Age;
