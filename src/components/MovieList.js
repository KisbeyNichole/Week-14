import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies }) {
  return (
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
  );
}
