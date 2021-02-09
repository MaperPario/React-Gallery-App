import React from 'react';
import {
  NavLink
} from "react-router-dom";

//simple 404 page to render if route not found, included home button to get users back to index route
const FourOhFour = () => {
  return(
    <div>
      <h1>
        404 Error: Page Not Found
      </h1>
      <button><NavLink to='/'>Home</NavLink></button>
    </div>
  )
}

export default FourOhFour;