import axios from "axios";
import React, { useEffect, useState } from "react";


console.log('Test Keys',process.env.REACT_APP_API_KEY)

var apiKey = process.env.REACT_APP_API_KEY;


var api = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: apiKey,
  },
});

export default function Youtube() {
  const [video, setData] = useState([]);

  //const [term, setSearch] = useState([]);

  const handleChange = (event) => {
    console.log("event", event.target.value);
    //setSearch();
    const search = event.target.value;
    gettingData(search);
  };

  async function gettingData(termFromSearchBar) {
    console.log("searchbar", termFromSearchBar);

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

      <button onClick={(e) => gettingData('Default')}>search</button>

      {video.map((item, i) => {
        return (
          <div key={i}>
            <p>{item.snippet.title + "-" + item.snippet.publishTime}</p>
            <img
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.description}
            />
            <p>{item.snippet.channelTitle}</p>
            <hr></hr>
          </div>
        );
      })}
    </>
  );
}
