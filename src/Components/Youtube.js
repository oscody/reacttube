import axios from "axios";
import React, { useState } from "react";
import YoutubeList from "./YoutubeList";

//console.log("Test Keys", process.env.REACT_APP_API_KEY);

let apiKey = process.env.REACT_APP_API_KEY;

let api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 1,
    key: apiKey,
    order: "viewCount",
  },
});

export default function Youtube() {
  const [video, setData] = useState([]);

  const handleChange = (event) => {
    console.log("event", event.target.value);
    //setSearch();
    const search = event.target.value;
    gettingData(search);
  };

  async function gettingData(termFromSearchBar) {
    ///console.log("videoCategories", termFromSearchBar);

    api
      .get("/search", {
        params: {
          q: termFromSearchBar,
        },
      })
      .then((response) => {
        console.log("response", response);
        setData(response.data.items);
      });
  }
  return (
    <>
      <p>Youtube Search</p>

      <input onBlur={handleChange} name="video-search" type="text" />

      <button onClick={(e) => gettingData(e)}>search</button>
      <hr></hr>
      <YoutubeList video={video}></YoutubeList>
    </>
  );
}
