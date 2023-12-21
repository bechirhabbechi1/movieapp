import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCards';

const MovieList = ({ movies }) => {
  return (
    <Container>
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} md={4}>
            <MovieCard {...movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
