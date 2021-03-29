import React from 'react';
import styles from './video_detail.module.css';

const Videodetail = (props) => (
    <section className={styles.detail}>
        <iframe className={styles.video} id="ytplayer" type="text/html" 
        width="100%" height="500px"
        src={`https://www.youtube.com/embed/${props.video.id}`}
        frameborder="0" allowfullscreen></iframe>
        <h2>{props.video.snippet.title}</h2>
        <h3>{props.video.snippet.channelTitle}</h3>
        <h3>{props.video.snippet.description}</h3>
    </section>
    );

export default Videodetail;