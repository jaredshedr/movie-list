import React from 'react';

let Unwatched = (props) => (
  <div className='unwatch-btn'>
    <button onClick= { (event) => props.unwatched(event) } >Unwatched</button>
  </div>
);

export default Unwatched