import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
  return (
    <div>
      <h1>{props.appTitle}</h1>
      <p>This is really working!</p>
      <button
        className="cockpitBtn"
        onClick={props.clicked}>Toggle Persons
      </button>
    </div>
  )
}

export default cockpit
