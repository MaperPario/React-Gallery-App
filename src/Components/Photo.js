import React from 'react';

//photo component for rendering the img at it's url. used in PhotoList.
const Photo = props => {
  return(
    <li>
      <img src={props.url} alt={props.title} />
    </li>
  )
}

export default Photo;