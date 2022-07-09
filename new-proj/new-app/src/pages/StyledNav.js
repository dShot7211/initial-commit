import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { openModal } = useGlobalContext();

  return (
    <div className="flexnav">
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Contact
        </NavLink>
        <NavLink
          to="display"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Display
        </NavLink>
      </nav>
      <button className="login" onClick={openModal}>
        Login
      </button>
    </div>
  );
};

export default Navbar;
