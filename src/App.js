import React from 'react';
import { Parent } from './components/Parent.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

export default function App() {
  return (
    <Container>
      <h2>Parent to Child</h2>
      <Parent />
    </Container>
  );
}
