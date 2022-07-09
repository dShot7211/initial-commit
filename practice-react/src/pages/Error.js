import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="section">
      <h3>Error</h3>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </div>
  );
};

export default Error;
