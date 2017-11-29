import React, { Fragment } from 'react';
import './Cockpit.css';
// import Aux from '../../hoc/Hoc'

const cockpit = (props) => {
  return (
    <Fragment>
      <h1>{props.appTitle}</h1>
      <p>This is really working!</p>
      <button
        className="cockpitBtn"
        onClick={props.clicked}>Toggle Persons
      </button>
    </Fragment>
  )
}

export default cockpit;
