import React from 'react';
import "../../../src/global.scss";

const Navbar = () => {
  return (
    <div className='Nav'>
      <ul>
        <li><a href="./"> Home </a></li>
        <li><a href="./">About Us</a></li>
        <li><a href="./">Hard Drinks</a></li>
        <li><a href="./">Soft Drinks</a></li>
        <li><a href="./">Snacks</a></li>
      </ul>
    </div>
  );
};

export default Navbar;