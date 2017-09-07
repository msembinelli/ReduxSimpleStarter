import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video; === ({video}) ES6 Syntax
  // console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <h5 className="mt-0"><b>{video.snippet.title}</b></h5>
          <h6>{video.snippet.channelTitle}</h6>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
