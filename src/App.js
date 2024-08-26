import React, { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import popcornImage from './components/popcorn.png'



function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = '4c72b919a9d04a2bbc83c405e148f088';
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => console.error('Error fetching the data:', error));
  }, []);

  return (
    <div className="App">
        <Navbar className="bg-body-tertiary">
        <Container >
          <Navbar.Brand id="Title" href="#home">
            <img
              alt=""
              src={popcornImage} 
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           Todays Chart Toppers
          </Navbar.Brand>
        </Container>
      </Navbar>
      <MovieList movies={movies} />
    </div>
    
  );
}

export default App;