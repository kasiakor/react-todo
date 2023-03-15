import React, { Component } from "react";
import { TodoBanner } from "./TodoBanner";
import { TodoCreator } from "./TodoCreator";
import { TodoRow } from "./TodoRow";

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
      //newItemText: "",
    };
  }

  createNewTodo = (task) => {
    console.log("task", typeof task);
    // checks if any array element has got the same text as the input
    if (task !== "" && !this.state.toDoItems.find((i) => i.action === task)) {
      this.setState({
        toDoItems: [
          ...this.state.toDoItems,
          {
            action: task,
            done: false,
          },
        ],
      });
    }
  };

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });
    console.log("update", event.target.value);
  };

  toggleTodo = (todo) =>
    this.setState({
      toDoItems: this.state.toDoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });

  todoTableRows = () =>
    this.state.toDoItems.map((item) => (
      <TodoRow key={item.action} item={item} callback={this.toggleTodo} />
      // <tr key={item.action}>
      //   <td>{item.action}</td>
      //   <td>
      //     <input
      //       type="checkbox"
      //       checked={item.done}
      //       onChange={() => this.toggleTodo(item)}
      //     ></input>
      //   </td>
      // </tr>
    ));

  render() {
    return (
      <div>
        {/* <h4 className="bg-primary text-white text-center">
          {this.state.userName}'s To Do List (
          {this.state.toDoItems.filter((i) => !i.done).length} items to do)
        </h4> */}
        <TodoBanner name={this.state.userName} tasks={this.state.toDoItems} />
        <div className="container-fluid">
          {/* <div className="my-1">
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
          </div> */}
          <TodoCreator callback={this.createNewTodo} />
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{this.todoTableRows()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
