import React from 'react';
import {
  NavLink
} from "react-router-dom";

const Nav = () => (
  <nav class="main-nav">
    <ul>
      <li><NavLink to='/search/cats'>Cats</NavLink></li>
      <li><NavLink to='/search/dogs'>Dogs</NavLink></li>
      <li><NavLink to='/search/birds'>Birds</NavLink></li>
    </ul>
  </nav>
);

export default Nav;