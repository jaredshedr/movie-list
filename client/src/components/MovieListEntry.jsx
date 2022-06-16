import React from 'react';

let MovieListEntry = function (props) {

    if (!props.movie.titleClick) {
        return (
            <div className='movie-entry'>
                <div className="ind-movie" onClick={(event) => props.titleClick(event, props.movie)}>{props.movie.title}</div>
            </div>
        );
    } else {
        return (
            <div>
                <div className='movie-entry'>
                    <div className="ind-movie" onClick={(event) => props.titleClick(event, props.movie)}>{props.movie.title}</div>
                    <div>Year Produced: {props.movie.movieInfo.year}</div>
                    <div>Description: {props.movie.movieInfo.description}</div>
                    <button style={{backgroundColor: props.movie.watched ? 'green' : 'white'}} onClick={(event) => props.isWatched(event, props.movie) }>Watched</button>
                </div>
            </div>
        );
    }
}

export default MovieListEntry
