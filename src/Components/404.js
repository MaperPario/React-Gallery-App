import React from 'react';
import {
  NavLink
} from "react-router-dom";

const FourOhFour = () => {
  return(
    <div>
      <h1>
        404 Error: No Route Declared for URL Specified
      </h1>
      <button><NavLink to='/'>Home</NavLink></button>
    </div>
  )
}

export default FourOhFour;