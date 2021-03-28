import React, { useRef } from 'react';
import styles from './search_header.module.css';

const Search_header = (props) => {
    const inputRef= useRef();
    // const value= inputRef.current.value;
    const onClick = () => {
        const value= inputRef.current.value;
        props.onSearch(value);
    }
    const onKeyPress = (event) => {
        if (event.charCode === 13) {
            const value= inputRef.current.value;
            props.onSearch(value);
        }
    }
    
    return (
        <header className={styles.header}>
        <div className={styles.logo}>
            <img className={styles.img} src="/images/logo.png" alt="logo"></img>
            <h1 className={styles.title}>Youtube</h1>
        </div>
        <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress}></input>
        <button className={styles.button} onClick={onClick}>
            <img className={styles.buttonImg} src="/images/search.png" alt="search"></img>
        </button>
    </header>
    )
};

export default Search_header;