import React from 'react';
import './UserInput.css'

const userInput = (props) => {
  return (
    <div className="inputDiv">
      <input className="inputField" type="text" onChange={props.changeName} value={props.currentValue} />
    </div>
  )
}

export default userInput;
