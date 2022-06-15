import React from 'react';

let SearchBar = (props) => (
  <div className='search-bar'>
    <input type='text' className='search' onChange= {(event) => props.handleChange(event)}></input>
    <button onClick= { (event) => props.search(event) } >Search</button>
  </div>
);

export default SearchBar