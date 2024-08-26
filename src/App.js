import React, { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

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
      <h1>Todays Chart Toppers</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;