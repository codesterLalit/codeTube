import axios from "axios";

const KEY = "AIzaSyB5mSj48ZjZKIjZH7qekex7rfiDhmo3Fhg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
