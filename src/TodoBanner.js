import React, { Component } from "react";

export class TodoBanner extends Component {
  render() {
    return (
      <h4 className="bg-primary text-white text-center p-2">
        {/* {this.state.userName}'s To Do List (
        {this.state.toDoItems.filter((i) => !i.done).length} items to do) */}
        {this.props.name}'s To Do List (
        {this.props.tasks.filter((i) => !i.done).length} items to do)
      </h4>
    );
  }
}
