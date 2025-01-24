import React, { Component } from "react";

class NewTaskForm extends Component {
  state = {
    value: "",
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.actions.addTask(this.state.value);
    this.setState({
      value: "",
    });
    this.props.actions.viewUnComplitedTasksCount();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.value}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

export default NewTaskForm;
