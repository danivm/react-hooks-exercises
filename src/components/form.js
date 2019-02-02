import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    surname: ""
  };

  handleInputChange = event => {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, surname } = this.state;
    const result = `Hi ${name} ${surname}`;
    alert(result);
  };

  render() {
    const { name, surname } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Surname:
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
