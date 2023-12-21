import React, { useState } from 'react';
import './App.css'
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './components/MovieCards';
import MovieList from './components/MovieLists';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Jhone wick',
      description: 'John Wick faces his deadliest adversaries in the fourth installment of the series. So, enjoy watching this movie and have fun.',
      posterURL: 'https://m.media-amazon.com/images/I/81fk-N7tvbL._AC_UF894,1000_QL80_.jpg',
      rating: 4.5,
    },
    {
        id: 2,
        title: 'Dune',
        description: 'Paul Atreides, a brilliant and gifted young man with a destiny greater than himself, must travel to the most dangerous planet in the universe in order to secure the future of his family and his people.',
        posterURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/220px-Dune_%282021_film%29.jpg',
        rating: 5.0,
    },
  ]);

  const [filter, setFilter] = useState({
    title: '',
    rating: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilter((prevFilter) => ({ ...prevFilter, [filterType]: value }));
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating.toString().includes(filter.rating)
    );
  });

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Filter onFilterChange={handleFilterChange} />
          <MovieList movies={filteredMovies} />
        </Col>
        <Col md={4}>
          {}
          {}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
