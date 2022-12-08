import React from "react";
import YoutubeInfo from "./YoutubeInfo";

const YoutubeList = (props) => {
  console.log("YoutubeList", props.video);
  return (
    <>
      <div>Youtube</div>

      {props.video.map((item, i) => 
        (
          <div key={i}>
            <p>{item.snippet.title + "-" + item.snippet.publishTime}</p>
            <img
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.description}
            />
            <p>{item.snippet.channelTitle}</p>
            <YoutubeInfo videoID={item.id}></YoutubeInfo>
            <hr></hr>
          </div>
        )
      )}

      
    </>
  );
};

export default YoutubeList;
