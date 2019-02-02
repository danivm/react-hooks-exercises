import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter";
import Form from "./components/form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>React Hooks Exercises</h1>
        </header>
        <div className="exercises">
          <div className="exercise-container">
            <h3>Exercise 1 - Counter</h3>
            <Counter />
          </div>
          <div className="exercise-container">
            <h3>Exercise 2 - Form</h3>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
