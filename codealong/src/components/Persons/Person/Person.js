import React, { Component } from 'react';
import Radium from 'radium';
import './Person.css';
import PropTypes from 'prop-types';

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
    if(this.props.position === 0) { // condition to check element position
      this.inputElement.focus(); // focus() built-in JS func.
    }
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
         <input
           ref={(input) => { this.inputElement = input }} /* sets up this.inputElement to be used elsewhere */
           type="text"
           onChange={this.props.changed}
           value={this.props.name} />
      </div>
    )
  }
}

Person.propTypes = {
  clicked: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Radium(Person);
