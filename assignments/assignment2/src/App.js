import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    string: ''
  }

  changeHandler = (event) => {
    this.setState({
      string: event.target.value
    })
  }

  deleteHandler = (idx) => {
    const characters = this.state.string.split('');
    characters.splice(idx, 1);
    const newString = characters.join('');
    this.setState({
      string: newString
    })
  }

  render() {

    const characters = this.state.string.split('').map((char, idx) => {
      return (
        <CharComponent
          className="charBox"
          lastChar={char}
          key={idx}
          clickevent={() => this.deleteHandler(idx)} />
      )
    })

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.string} />
        <p>
            Length of the input: {this.state.string.length} characters
        </p>
        <ValidationComponent
          textLength={this.state.string.length} />
        {characters}
      </div>
    );
  }
}

export default App;
