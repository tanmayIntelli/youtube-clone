import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_DETAILS } from "../utils/constant";
import moment from "moment";

const MainVideo = () => {
  const dispatch = useDispatch();
  const [videoDetails, setVideoDetails] = useState();
  const [showDescription, setShowDescription] = useState(false);
  const [searchParam] = useSearchParams();
  const getVideoPlayer = async () => {
    const URL = YOUTUBE_VIDEO_DETAILS(searchParam.get("v"));
    console.log(URL);
    const json = await fetch(URL);
    const data = await json.json();
    setVideoDetails(data.items);
  };
  useEffect(() => {
    dispatch(closeSideMenu());
    getVideoPlayer();
  }, []);

  return (
    <div className="main-video">
      <iframe
        width="1300"
        height="700"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <br />
      {videoDetails && (
        <div>
          <p id="video-tile-title">{videoDetails[0]?.snippet.title}</p>
          <p id="video-tile-channelName">
            {videoDetails[0]?.snippet.channelTitle}
          </p>
          <span style={{ display: "inline-flex" }}>
            <p id="video-views">
              {videoDetails[0]?.statistics.viewCount > 1000000
                ? (videoDetails[0]?.statistics.viewCount / 1000000).toFixed(1) +
                  "M"
                : (videoDetails[0]?.statistics.viewCount / 100000).toFixed(2) +
                  "K"}{" "}
              views
            </p>
            <p id="video-tile-publishat">
              {moment
                .utc(videoDetails[0]?.snippet.publishedAt)
                .local()
                .startOf("seconds")
                .fromNow()}
            </p>
          </span>
          <div
            className="video-description"
            onClick={() => setShowDescription(!showDescription)}
          >
            <p>
              {showDescription
                ? videoDetails[0]?.snippet.description
                : (videoDetails[0]?.snippet.description).substring(0, 350) +
                  "...Read more"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainVideo;
