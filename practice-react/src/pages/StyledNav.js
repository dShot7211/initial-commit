import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="product"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Product
      </NavLink>
    </nav>
  );
};

export default Navbar;

// this happens when we come to NavLink vid in the course
// we use the styledNav.js after we come to the Navlink part of the vid in the course
// in the styledNav we use the NavLinks insted of the Links for the isActive prop we get
