import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe src={VideoSrc} title="player" />
      </div>
      <h4>{video.snippet.title}</h4>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
