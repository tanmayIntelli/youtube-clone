import React from "react";
import Button from "./button";

const ButtonList = () => {
  const btnList = [
    "All",
    "Music",
    "Arijit Singh",
    "Bollywood Music",
    "Game shows",
    "News",
    "Comedy",
    "Gaming",
    "Live",
    "Cooking shows",
    "Animated films",
    "Cinema",
    "Cricket",
    "Flying",
    "Computer science",
  ];
  return (
    <div className="main-container-btn-list">
      {btnList.map((btnName) => (
        <Button name={btnName} key={btnName} />
      ))}
    </div>
  );
};

export default ButtonList;
