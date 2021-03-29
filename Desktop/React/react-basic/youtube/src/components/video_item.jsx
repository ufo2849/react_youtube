import React from 'react';
import styles from './video_item.module.css';

const Videoitem = (props) => {
    const displayType= props.display === 'list' ? styles.list : styles.grid;
    return (
        <li className={`${styles.container} ${displayType}`} onClick={() => props.onSelect(props.video)}>
            <div className={styles.video}>
                <img src={props.video.snippet.thumbnails.default.url} className={styles.thumb} alt="video_thumb"></img>
                <div className={styles.description}>
                    <p className={styles.title}>{props.video.snippet.title}</p>
                    <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )};

export default Videoitem;