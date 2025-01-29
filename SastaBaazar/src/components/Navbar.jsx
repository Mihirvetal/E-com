/* eslint-disable no-unused-vars */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-evenly items-center bg-">
      <div className="flex ">
       <Link to={"/"}><img
          className="w-32 "
          src="https://i.pinimg.com/736x/6f/30/3b/6f303b63aae1b7307a9436e276f7869f.jpg"
          alt="sastaBazaar Logo"
        /></Link> 
        <ul className="flex text-xl gap-3 items-center">
          <li><Link to={"/"}>All</Link></li>
          <li><Link to={"/clothes"}>Clothes</Link></li>
          <li><Link to={"/furnitures"}>Furnitures</Link></li>
          <li><Link to={"/electronics"}>Electronics</Link></li>
          <li><Link to={"/toys"}>Toys</Link></li>
        </ul>
      </div>
      <div className="flex text-xl gap-10">
        <div> <Link to={'/cart'}><span>&#128722; {}</span></Link>  </div>
        <div className="flex gap-5">
        <Link to={'/login'}>
  <button className="px-6 py-2 bg-indigo-400 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105">
    Login
  </button>
</Link>
<Link to={'/signup'}>
  <button className="px-6 py-2 bg-indigo-400 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105">
    Signup
  </button>
</Link>

          
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
