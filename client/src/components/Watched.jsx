import React from 'react';

let Watched = (props) => (
  <div className='watch-btn'>
    <button onClick= { (event) => props.watched(event) } >Watched</button>
  </div>
);

export default Watched