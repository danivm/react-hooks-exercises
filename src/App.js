import React, { Component } from "react";
import "./App.css";
import Counter from "./components/counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>React Hooks Exercises</h1>
        </header>
        <div className="exercises">
          <h3>Exercise 1 - Counter</h3>
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
