import React from "react";
import { Link, NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink end to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
