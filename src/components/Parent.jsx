import React, { useState } from 'react';
import { Child } from './Child';
import Form from 'react-bootstrap/Form';

export const Parent = () => {
  const [name, setName] = useState('');

  return (
    <div className="parent-box">
      <h3>Parent component</h3>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
      </Form>

      <Child name={name} />
    </div>
  );
};
