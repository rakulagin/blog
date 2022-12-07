import React from "react";

import Post from "./Post";

import styles from './Post.module.scss'

const PostsList = () => {

    return (
        <div className={styles.list}>
            постс лист
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