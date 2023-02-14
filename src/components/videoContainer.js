import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./videoCard";

const VideoContainer = () => {
  const [videosList, setVideosList] = useState();

  const getVideosList = async () => {
    const json = await fetch(YOUTUBE_VIDEO_API);
    const data = await json.json();
    setVideosList(data.items);
  };

  useEffect(() => {
    getVideosList();
  }, []);

  return (
    <div className="video-list">
      {videosList?.map((videoData) => (
        <Link to={"watch?v=" + videoData.id} key={videoData.id}>
          <VideoCard data={videoData} key={videoData.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
