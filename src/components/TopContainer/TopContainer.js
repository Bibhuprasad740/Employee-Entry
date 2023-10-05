import React from "react";
import classes from "./TopContainer.module.css";

import Header from "./Header/Header";
import Form from "./Form/Form";

const TopContainer = (props) => {
  return (
    <div className={classes["top-container"]}>
      <Header />
      <Form onAddEmployee={props.onAddEmployee} />
    </div>
  );
};

export default TopContainer;
