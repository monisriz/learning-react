import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
  return (
      <div className="charBox" onClick={props.clickevent}>
        {props.lastChar}
      </div>
  )
}

export default charComponent;
