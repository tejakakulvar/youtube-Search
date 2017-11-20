import React from 'react'

const Videolistitem = function(props) {
  const thumbnailurl = props.video.snippet.thumbnails.default.url;
  return(
    <li onClick={() => props.onclickvideo(props.video)}className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={thumbnailurl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">
            {props.video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );

};

export default Videolistitem;

//
