import React from 'react';
import styles from './video_item.module.css';

const Videoitem = (props) => (
    <li className={styles.container}>
        <div className={styles.video}>
            <img src={props.video.snippet.thumbnails.default.url} className={styles.thumb} alt="video_thumb"></img>
            <div className={styles.description}>
                <p className={styles.title}>{props.video.snippet.title}</p>
                <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
            </div>
        </div>
    </li>
    );

export default Videoitem;