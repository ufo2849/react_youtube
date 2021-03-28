import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import Search_header from './components/search_header';
import Videolist from './components/video_list';

function App({youtube}) {
  const [videos, setVideos]= useState([]);

  const search = (name) => {
    youtube.search(name)
    .then(result => setVideos(result));
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    
    // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${name}&type=video&key=AIzaSyDR7xq0B_tnT8071QNgu2eU_Fhdzc4cmQc`, requestOptions)
    //   .then(response => response.json())
    //   .then(result => result.items.map(item => (
    //     {...item, id: item.id.videoId}
    //   )))
    //   .then(items => setVideos(items))
    //   .catch(error => console.log('error', error));
  }

  useEffect(() => {
    youtube.mostPopular()
    .then(result => setVideos(result));
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    
    // fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDR7xq0B_tnT8071QNgu2eU_Fhdzc4cmQc", requestOptions)
    //   .then(response => response.json())
    //   .then(result => setVideos(result.items))
      // .catch(error => console.log('error', error));
  }, []);

  return (
    <div className={styles.app}>
      <Search_header onSearch={search}/>
      <Videolist videos= {videos}/>
    </div>
  );
}

export default App;
