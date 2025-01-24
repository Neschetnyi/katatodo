import React from "react";
import TaskList from "./TaskList/TaskList";
import Footer from "./Footer/Footer";

const Main = ({ actions, data }) => {
  return (
    <section className="main">
      <TaskList actions={actions} data={data} />
      <Footer actions={actions} data={data} />
    </section>
  );
};

export default Main;
