import axios from 'axios';

let apiKey = process.env.REACT_APP_API_KEY;

const Service = (part) => {
    axios.create({
        baseURL: `https://www.googleapis.com/youtube/v3/`,
        params: {
          part: part,
          key: apiKey
        },
      });
}

export default Service

