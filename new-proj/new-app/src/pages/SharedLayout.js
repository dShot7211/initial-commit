import React from "react";
import { Outlet } from "react-router-dom";
import StyledNav from "./StyledNav";

const SharedLayout = () => {
  return (
    <>
      <StyledNav />
      <div className="section">
        <Outlet />
      </div>
    </>
  );
};

export default SharedLayout;
