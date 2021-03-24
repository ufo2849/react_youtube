import React, { useEffect, useState } from 'react';
import './app.css';
import Videolist from './components/video_list';

function App() {
  const [videos, setVideos]= useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDR7xq0B_tnT8071QNgu2eU_Fhdzc4cmQc", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <Videolist videos= {videos} />
  );
}

export default App;
