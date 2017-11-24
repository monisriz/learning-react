import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'Max'
  }

  changeHandler = (event) => {
    this.setState(
      {
        userName: event.target.value
      }
  )
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'orange'
    }
    return (
      <div className="App" style={style}>
        <UserInput
          changeName={this.changeHandler}
          currentValue={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Linus" />
        <UserOutput userName="Mark" />
      </div>
    );
  }
}

export default App;
