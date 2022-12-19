import React from 'react';
import "../../../src/global.scss";

const Navbar = () => {
  return (
    <div className='Nav'>
      <ul>
        <li><a href="./"> Home </a></li>
        <li><a href="./aboutus">About Us</a></li>
        <li><a href="./softdrinks">Hard Drinks</a></li>
        <li><a href="./harddrinks">Soft Drinks</a></li>
        <li><a href="./snacks">Snacks</a></li>
      </ul>
      <div class="Searchbar">
        <div class="search">
            <input type="text" class="searchTerm" placeholder="What are you looking for?"></input>
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;