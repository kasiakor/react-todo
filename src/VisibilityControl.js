import React, { Component } from "react";

export class VisibilityControl extends Component {
  render = () => (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        checked={this.props.isChecked}
        onChange={(e) => this.props.callback(e.target.checked)}
      />
      <label class="form-check-label">Show {this.props.description}</label>
    </div>
  );
}
