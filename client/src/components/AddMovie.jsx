import React from 'react';

let AddMovie = (props) => (
  <div className='add-movie'>
    <input type='text' className='add-movie' onChange= {(event) => props.handleAddMovie(event)}></input>
    <button onClick= {(event) => props.addMovie(event)} >Add Movie</button>
  </div>
);

export default AddMovie


// (event) => props.search(event, document.getElementsByClassName('input'))