import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('inside Persons.js constructor: ', props);
  }

  componentWillMount() {
    console.log('inside Persons.js componentWillMount');
  }

  componentDidMount() {
    console.log('inside Persons.js componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('inside Persons.js componentWillReceiveProps: ', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('inside Persons.js shouldComponentUpdate: ', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.clicked !== this.props.clicked;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('inside Persons.js componentWillUpdate: ', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('inside Persons.js componentDidUpdate');
  }


  render() {
    console.log('inside Persons.js render');

    return this.props.persons.map((person, index) => {
            return <Person
              clicked={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.props.changed(event, person.id)} />
          })
    }
}

export default Persons;
