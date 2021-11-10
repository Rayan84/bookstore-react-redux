import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul className="navbar">
        <li><Link to='/'>Books</Link></li>
        <li><Link to='/categories'>Categories</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
