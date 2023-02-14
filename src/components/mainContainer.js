import React from "react";
import ButtonList from "./buttonList";
import VideoContainer from "./videoContainer";

const MainContainer = () => {
  return (
    <div className="main-container">
      <div>
        <ButtonList />
      </div>
      <div>
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
