import React from "react";
import Style from "./VideoCategory.module.scss";
import Video from "../../icons/Video";

export const VideoCategory = () => {
  const videos = [
    {
      url: "https://www.youtube.com/watch?v=lodJK6CzvpM",
      title: "Risk Calculator Setup Video",
      thumbnail: "https://img.youtube.com/vi/a00NRSFgHsY/0.jpg",
    },
    {
      url: "https://www.youtube.com/watch?v=lodJK6CzvpM",
      title: "Risk Calculator Setup Video",
      thumbnail: "https://img.youtube.com/vi/a00NRSFgHsY/0.jpg",
    },
  ];
  return (
    <div className={Style.wrapper}>
      <div className={Style.header}>
        <div className="d-flex justify-content-center align-items-center">
          <Video />
          <h3>Videos</h3>
        </div>
        <p>See All</p>
      </div>
      <div className={Style.body}>
        {videos.map((video) => (
          <div className={Style.singleVideo}>
            <img src={video.thumbnail} />
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
