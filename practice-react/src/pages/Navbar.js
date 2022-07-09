import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="product">Product</Link>
    </nav>
  );
};

export default Navbar;

// we use the styledNav.js after we come to the Navlink part of the vid in the course
// in the styledNav we use the NavLinks insted of the Links for the isActive prop we get
