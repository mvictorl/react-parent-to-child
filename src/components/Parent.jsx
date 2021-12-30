import React, { useState } from 'react';
import { Child } from './Child';
import Form from 'react-bootstrap/Form';

export const Parent = () => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="parent-box">
      <h3>Parent component</h3>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={handleNameChange}
          ></Form.Control>
        </Form.Group>
      </Form>

      <Child name={name} />
    </div>
  );
};
