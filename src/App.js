import React, { useState } from "react";
import TopContainer from "./components/TopContainer/TopContainer";
import BottomContainer from "./components/BottomContainer/BottomContainer";

function App() {
  const [employees, setEmployees] = useState([]);
  // const employees = [
  //   {
  //     id: 1,
  //     name: "Bibhu Prasad Sahoo",
  //     age: 23,
  //   },
  //   {
  //     id: 2,
  //     name: "Alisha Sahoo",
  //     age: 22,
  //   },
  //   {
  //     id: 3,
  //     name: "Suman Prava Sahoo",
  //     age: 46,
  //   },
  //   {
  //     id: 4,
  //     name: "Jatin Kumar Sahoo",
  //     age: 56,
  //   },
  // ];

  function addNewEmployee(employee) {
    setEmployees((prevEmployees) => [employee, ...prevEmployees]);
  }
  return (
    <>
      <TopContainer onAddEmployee={addNewEmployee} />
      {employees.length != 0 ? <BottomContainer employees={employees} /> : null}
    </>
  );
}

export default App;
