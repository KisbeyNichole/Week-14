import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie.js';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Replace with your API key and desired endpoint
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
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            title={movie.title}
            year={movie.release_date.split('-')[0]}
            info={movie.overview}
          />
        ))}
      </div>
    </div>
  );
}

export default App;