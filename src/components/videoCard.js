import React from "react";
import moment from "moment";

const VideoCard = ({ data }) => {
  return (
    <div className="video-card-parent">
      <div>
        <img
          src={data.snippet.thumbnails.medium.url}
          alt="thumbnail"
          className="thumbnail"
        />
      </div>
      <div>
        <p id="video-title">{data.snippet.title}</p>
        <p id="channel-title">{data.snippet.channelTitle}</p>
        <span style={{ display: "inline-flex" }}>
          <p id="video-views">
            {data.statistics.viewCount > 1000000
              ? (data.statistics.viewCount / 1000000).toFixed(1) + "M"
              : (data.statistics.viewCount / 100000).toFixed(2) + "K"}{" "}
            views .
          </p>
          <p id="upload-duration">
            <b> . </b>
            {moment
              .utc(data.snippet.publishedAt)
              .local()
              .startOf("seconds")
              .fromNow()}
          </p>
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
