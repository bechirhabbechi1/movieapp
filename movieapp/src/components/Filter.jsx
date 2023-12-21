import React from 'react';
import { Form } from 'react-bootstrap';

const Filter = ({ onFilterChange }) => {
  return (
    <Form>
      <Form.Group controlId="filterTitle">
        <Form.Control
          type="text"
          placeholder="Enter title"
          onChange={(e) => onFilterChange('title', e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="filterRating">
        <Form.Control
          type="text"
          placeholder="Enter rating"
          onChange={(e) => onFilterChange('rating', e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default Filter;
