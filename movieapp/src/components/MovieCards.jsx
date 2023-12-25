import React from 'react';
import { Card } from 'react-bootstrap';
import { useLinkClickHandler } from 'react-router-dom';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <a href="https://www.youtube.com/watch?v=yjRHZEUamCc" class="btn btn-primary stretched-link">Watch trailer</a>
      </Card.Body>
    </Card>
    
  );
};

export default MovieCard;
