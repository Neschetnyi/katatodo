import React, { Component } from "react";

class EditComponent extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    this.props.changingTitle(this.props.id, this.state.title);
    this.props.togleEdit();
  };

  render() {
    console.log("editComponent props:", this.props);
    console.log("editComponent id:", this.props.id);
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.title}
          onChange={this.onChange}
          className="edit"
        />
      </form>
    );
  }
}

export default EditComponent;
