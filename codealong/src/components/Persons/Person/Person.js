import React, { Component } from 'react';
import Radium from 'radium';
import './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('inside Person.js constructor: ', props);
  }

  componentWillMount() {
    console.log('inside Person.js componentWillMount');
  }

  componentDidMount() {
    console.log('inside Person.js componentDidMount');
  }

  render() {
    console.log('inside Person.js render');
    const style = {
      '@media (min-width: 500px)': {
        width: '450px'
      }
    }
    return (
      <div className="Person" style={style}>
        <p onClick={this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
         <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    )
  }
}

export default Radium(Person);
