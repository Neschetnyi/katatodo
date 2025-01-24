import React from "react";
import NewTaskForm from "./NewTaskForm/NewTaskForm";

const Header = ({ actions }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm actions={actions} />
    </header>
  );
};

export default Header;
