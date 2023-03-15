import React, { Component } from "react";

class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { newItemText: "" };
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
    console.log("update", event.target.value);
  };

  createNewTodo = () => {
    this.props.callback(this.props.newItemText);
    this.setState({ newItemText: "" });
  };

  render() {
    return (
      <div>
        <div className="my-1">
          <input
            className="form-control"
            value={this.state.newItemText}
            onChange={this.updateNewTextValue}
          ></input>

          <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default TodoCreator;
