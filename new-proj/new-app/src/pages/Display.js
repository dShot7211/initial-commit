import React from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";

const Display = () => {
  const { people } = useGlobalContext();

  console.log(people);
  return (
    <div>
      <h4>{people[0].name}</h4>
      <h4>{people[0].email}</h4>

      <NavLink to="/contact" className="btn">
        back to contact
      </NavLink>
    </div>
  );
};

export default Display;
