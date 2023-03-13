import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam",
      toDoItems: [
        { action: "Go to cinema", done: true },
        { action: "Read a book", done: false },
        { action: "Cook dinner", done: true },
        { action: "Walk a dog", done: true },
      ],
      newItemText: "",
    };
  }

  createNewItem = () => {
    // checks if any array element has got the same text as the input
    if (
      !this.state.toDoItems.find((i) => i.action === this.state.newItemText)
    ) {
      this.setState({
        toDoItems: [
          ...this.state.toDoItems,
          {
            action: this.state.newItemText,
            done: false,
          },
        ],
        newItemText: "",
      });
    }
  };

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
  };

  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center">
          {this.state.userName}'s To Do List (
          {this.state.toDoItems.filter((i) => !i.done).length} items to do)
        </h4>
        <div className="container-fluid">
          <div className="my-1">
            <input
              className="form-control"
              value={this.state.newItemText}
              onChange={this.updateNewTextValue}
            ></input>

            <button
              className="btn btn-primary mt-1"
              onClick={this.createNewItem}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}
