import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const Body = () => {
  return (
    <div className="body">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
