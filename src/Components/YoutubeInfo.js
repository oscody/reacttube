import axios from "axios";
import React, { useState, useEffect } from "react";

let apiKey = process.env.REACT_APP_API_KEY;

let api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "statistics",
    key: apiKey,
    order: "viewCount",
  },
});

const YoutubeInfo = (props) => {
  //console.log("--------------------------------------------");
  const [info, setInfo] = useState([]);

  ///console.log('videoId',props.videoID.videoId);

  const vid = props.videoID.videoId;

  useEffect(() => {
    api
      .get("/videos", {
        params: {
          id: vid,
        },
      })
      .then((response) => {
        //console.log("YoutubeInfo-response", response);
        setInfo(response.data.items);
        console.log("YoutubeInfo-info", response.data.items);
      });
  }, [vid]); // [] only triggers once

  //console.log("YoutubeInfo", info);

  return (
    <div>
      {info.map((data, i) => {
        return (
          <div key={i}>
            <li>Views {data.statistics.viewCount}</li>
            <li>Likes {data.statistics.likeCount}</li>
          </div>
        );
      })}
    </div>
  );
};

export default YoutubeInfo;
