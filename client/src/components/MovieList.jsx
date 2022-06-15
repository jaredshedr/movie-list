import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = (props) => (
  <div className="movie-list">
    {props.movies.map((movie) => <MovieListEntry key={movie.title} movie={movie} isWatched={props.isWatched}/>)}
  </div>
);

export default MovieList;



