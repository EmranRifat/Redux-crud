import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Redux </a>
      </div>
      <div className="flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/showbook">Show-book</Link>
          </li>
          <li>
            <Link to="/addbook">Add-Book</Link>
          </li>
          <li>
            <Link>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
