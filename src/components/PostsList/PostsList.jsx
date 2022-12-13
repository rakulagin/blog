import React from "react";

import Post from "./Post";

import styles from './Post.module.scss'

const PostsList = () => {

    return (
        <div className={styles.list}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default PostsList