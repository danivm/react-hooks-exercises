import React, { Component } from "react";

export default class Coordinates extends Component {
  state = { x: 0, y: 0 };

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div>
        <p>
          {this.state.x} - {this.state.y}
        </p>
      </div>
    );
  }
}
