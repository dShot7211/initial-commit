import React from "react";

const Sidebar = ({ sideOpen, setSideOpen }) => {
  return (
    // <aside className="sidebar show-sidebar">
    <aside className={`${sideOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src="./logo.svg" alt="logo" />
        <button className="close-btn" onClick={() => setSideOpen(!sideOpen)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <ul className="links">
        <li>
          <a href="/">
            <i className="fa-solid fa-house-user"></i>home
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa-solid fa-people-group"></i>team
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa-solid fa-bars-progress"></i>projects
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa-solid fa-calendar"></i>calender
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa-solid fa-book"></i>documents
          </a>
        </li>
      </ul>
      <ul className="social-icons">
        <li>
          <a href="https://www.twitter.com">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <i className="fa-brands fa-behance"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <i className="fa-brands fa-sketch"></i>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
