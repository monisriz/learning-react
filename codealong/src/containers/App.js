import React, { PureComponent } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: 1, name: 'Max', age: 28 },
        { id: 2, name: 'Man', age: 29 },
        { id: 3, name: 'Tim', age: 26 }
      ],
      showPersons: false,
      toggleClicked: 0
    }
    console.log('inside App.js constructor: ', props);
  }

  componentWillMount() {
    console.log('inside App.js componentWillMount');
  }

  componentDidMount() {
    console.log('inside App.js componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('inside App.js shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //       nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('inside App.js componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('inside App.js componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    // findIndex takes a function. If truthy, it returns the index of the
    // element that satisfies the condition in the function. Else return -1.
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]);
    // Rest operator below same as the line above. Creating copy of the opject.
    const person = {
      ...this.state.persons[personIndex]
    };

    // set person object from above equal to the 'event.target.value' from the
    // input field. Create a copy of persons array. Set the element/person in
    // the array to be the person found by the personIndex above.
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // creating array copy
    const persons = [...this.state.persons]; // ES6 'Rest operator'
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const showStatus = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !showStatus,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  render() {
    console.log('inside App.js render');
    let persons = null;
    if (this.state.showPersons){
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
    }

    return (
      <StyleRoot> {/*needed for Radium when using media queries*/}
        <div className="App">
          <button onClick={() => {this.setState({showPersons:true})}}>Show Persons</button>
          <Cockpit
            clicked={this.togglePersonsHandler}
            appTitle={this.props.title} />
          {persons}
        </div>
      </StyleRoot>
    );
    // below line is same as the code above: return( <div ......</div>  );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi, I'm a React App!!!"));
  }
}

export default Radium(App); //wrap App with Radium() when using media queries
