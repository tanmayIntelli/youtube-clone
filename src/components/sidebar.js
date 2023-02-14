import React from "react";
import {
  MdHome,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdMusicNote,
  MdLiveTv,
} from "react-icons/md";
import { TfiYoutube, TfiGame } from "react-icons/tfi";
import { VscFlame } from "react-icons/vsc";
import { BsNewspaper, BsTrophy, BsLightbulb } from "react-icons/bs";
import { GiFilmStrip, GiClothes } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="sidebar">
      <ul>
        <li>
          <span className="icon-text">
            <MdHome style={{ paddingRight: "8px" }} />
            <Link to="/"> Home</Link>
          </span>
        </li>
        <li>
          <span className="icon-text">
            <TfiYoutube style={{ paddingRight: "8px" }} />
            Shorts
          </span>
        </li>
        <li>
          <span className="icon-text">
            <MdOutlineSubscriptions style={{ paddingRight: "8px" }} />
            Subscriptions
          </span>
        </li>
      </ul>
      <div className="break-line"></div>
      <ul>
        <li>
          <span className="icon-text">
            <MdOutlineVideoLibrary style={{ paddingRight: "8px" }} /> Library
          </span>
        </li>
        <li>
          <span className="icon-text">
            <MdHistory style={{ paddingRight: "8px" }} /> History
          </span>
        </li>
      </ul>
      <div className="break-line"></div>
      <ul>
        <li>
          <span className="icon-text">
            <VscFlame style={{ paddingRight: "8px" }} /> Trending
          </span>
        </li>
        <li>
          <span className="icon-text">
            <MdMusicNote style={{ paddingRight: "8px" }} /> Music
          </span>
        </li>
        <li>
          <span className="icon-text">
            <GiFilmStrip style={{ paddingRight: "8px" }} /> Films
          </span>
        </li>
        <li>
          <span className="icon-text">
            <MdLiveTv style={{ paddingRight: "8px" }} /> Live
          </span>
        </li>
        <li>
          <span className="icon-text">
            <TfiGame style={{ paddingRight: "8px" }} />
          </span>
          Gaming
        </li>
        <li>
          <span className="icon-text">
            <BsNewspaper style={{ paddingRight: "8px" }} /> News
          </span>
        </li>
        <li>
          <span className="icon-text">
            <BsTrophy style={{ paddingRight: "8px" }} /> Sports
          </span>
        </li>
        <li>
          <span className="icon-text">
            <BsLightbulb style={{ paddingRight: "8px" }} /> Learning
          </span>
        </li>
        <li>
          <span className="icon-text">
            <GiClothes style={{ paddingRight: "8px" }} /> Fashion & Beauty
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
