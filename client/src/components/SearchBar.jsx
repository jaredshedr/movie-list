import React from 'react';

let SearchBar = (props) => (
  <div className='search-bar'>
    <input type='search' className='search' onChange= {(event) => props.handleChange(event)}></input>
    <button onClick= { (event) => props.search(event) } >Search</button>
  </div>
);

export default SearchBar