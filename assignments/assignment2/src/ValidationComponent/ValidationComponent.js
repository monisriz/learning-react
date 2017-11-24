import React from 'react';

const validationComponent = (props) => {
  let message = <h2>Text too short</h2>;
  if (props.textLength > 5){
    message = <h2>Text long enough</h2>;
  }

  return (
    <div>{message}</div>
  )
}

export default validationComponent;
