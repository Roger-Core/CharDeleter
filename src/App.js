import React from "react";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

import "./App.css";

class App extends React.Component {
  state = {
    userInput: "Hello everyone",
  };

  inputChangedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <hr />
        <input
          placeholder="Type Something"
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.userInput}
        />
        <h2>{this.state.userInput}</h2>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
        <hr />
      </div>
    );
  }
}

export default App;
