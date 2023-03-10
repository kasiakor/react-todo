import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Adam",
    };
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === "Adam" ? "Bob" : "Adam",
    });
  };

  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center">
          {this.state.userName}'s To Do List
        </h4>
        <button onClick={this.changeStateData}>Change</button>
      </div>
    );
  }
}
