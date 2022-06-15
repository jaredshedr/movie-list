import React from 'react';

let MovieListEntry = (props) => (
    <div className='movie-entry'>
        <div className="ind-movie">{props.movie.title}</div>
        <button style={{backgroundColor: props.movie.watched ? 'green' : 'white'}} onClick={(event) => props.isWatched(event, props.movie) }>Watched</button>
    </div>
);

export default MovieListEntry

// create a watched an unwatched button
  // when clicking the watched it will sort it into the unwatched state
// if watched is clicked the method will change state

// conditional in movie list entry, if watched is true, render all watched and set unwatched to false