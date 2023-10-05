import React from "react";
import classes from "./Name.module.css";

const Name = (props) => {
  return <h1 className={classes.name}>{props.name}</h1>;
};

export default Name;
