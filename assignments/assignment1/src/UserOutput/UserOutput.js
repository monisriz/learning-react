import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="userCard">
      <p>
        <h2 className="userHeading">
          {props.userName}
        </h2>
      </p>

      <p>
        <h3>
          likes cats.
        </h3>
      </p>
    </div>
  )
}

export default userOutput;
