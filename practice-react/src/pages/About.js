import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="section">
      <h3>About</h3>
      <Link to="/" className="btn">
        Home
      </Link>
    </div>
  );
};

export default About;
