import React from "react";
import Task from "./Task/Task";

const TaskList = ({ data, actions }) => {
  console.log("TaskList data:", data);

  let tasksNewArr = [];
  let renderingTasks = (taskList) => {
    for (let i = 0; i < taskList.length; i++) {
      tasksNewArr = taskList.map((task) => {
        let { id, ...prop } = task;
        return (
          <Task
            key={id}
            {...prop}
            deleteTask={() => actions.deleteTask(id)}
            togleCecked={() => actions.togleCecked(id)}
            viewUnComplitedTasksCount={() =>
              actions.viewUnComplitedTasksCount(id)
            }
          />
        );
      });
    }
  };

  let switchArraysOnViewMode = () => {
    if (data.viewMode === "all") {
      return data.tasks;
    } else if (data.viewMode === "active") {
      return data.tasks.filter((task) => !task.checked);
    } else if (data.viewMode === "completed") {
      return data.tasks.filter((task) => task.checked);
    }
  };
  tasksNewArr = switchArraysOnViewMode();
  renderingTasks(tasksNewArr);
  console.log("TaskList tasksNewArr", tasksNewArr);
  return <ul className="todo-list">{tasksNewArr}</ul>;
};

export default TaskList;
