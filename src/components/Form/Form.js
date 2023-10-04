import React from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  return (
    <div className={classes["form-container"]}>
      <form>
        <div className={classes.action}>
          <label htmlFor="">Enter Your Name</label> <br />
          <input type="text" />
        </div>
        <div className={classes.action}>
          <label htmlFor="">Enter Your Age</label>
          <br />
          <input type="text" />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
