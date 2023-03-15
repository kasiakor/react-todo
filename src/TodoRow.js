import React, { Component } from "react";

class TodoRow extends Component {
  render() {
    return (
      <tr>
        {/* <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => this.toggleTodo(item)}
          ></input>
        </td> */}
        <td>{this.props.item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={this.props.item.done}
            onChange={() => this.props.callback(this.props.item)}
          ></input>
        </td>
      </tr>
    );
  }
}

export default TodoRow;
