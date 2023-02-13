import React, { useEffect, useState } from "react";
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
        <VideoCard data={videoData} key={videoData.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
