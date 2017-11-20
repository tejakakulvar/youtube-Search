import React from 'react'

const Player = (props) => {
  if(!props.video){
    return <div className="loader"></div>;
  }
  const id =  props.video.id.videoId;
  //const url = "https://www.youtube.com/embed/"+id;
  const url = `https://www.youtube.com/embed/${id}`;
  return(
    <div className="player col-md-6">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{props.video.snippet.title}</div>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

export default Player;
