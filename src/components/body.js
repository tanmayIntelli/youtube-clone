import React from "react";
import MainContainer from "./mainContainer";
import Sidebar from "./sidebar";

const Body = () => {
  return (
    <div className="body">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-container">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
