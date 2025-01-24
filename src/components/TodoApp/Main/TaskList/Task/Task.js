import React, { Component } from "react";

class Task extends Component {
  onChange = (e) => {
    this.props.togleCecked(e.target.id);
    this.props.viewUnComplitedTasksCount();
  };

  onDelete = (e) => {
    this.props.deleteTask(e.target.id);
    this.props.viewUnComplitedTasksCount();
  };

  render() {
    let { checked } = this.props;
    let classNames = "";

    console.log("single task", this.props);
    console.log("single task checked", checked);

    if (checked) {
      classNames += "completed ";
    }
    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            checked={checked}
            type="checkbox"
            onChange={this.onChange}
          />
          <label>
            <span className="description">{this.props.title}</span>
            <span className="created">created 5 minutes ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button
            className="icon icon-destroy"
            onClick={this.onDelete}
          ></button>
        </div>
      </li>
    );
  }
}

export default Task;
