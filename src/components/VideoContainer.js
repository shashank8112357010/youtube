import React, { useEffect } from 'react'
import axios from 'axios';
import {API_KEY,  YOUTUBE_VIDEO_API } from '../constant/youtube';

const VideoContainer = () => {
  const fetchingYoutubeVideo =async ()=>{
    try {
      const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
    console.log(res);
    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect(()=>{
   fetchingYoutubeVideo();
  },[]);
  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer