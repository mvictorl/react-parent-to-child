import React from 'react';

export const Child = ({ name }) => {
  return (
    <div className="child-box">
      <p>
        <i>Child component</i>
      </p>
      <span>Name is: {name}</span>
    </div>
  );
};
