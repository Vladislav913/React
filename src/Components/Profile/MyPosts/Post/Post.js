import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.shopifycloud.com/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png"
                 alt="img"/>
            {props.message}

            <span>Like {props.userLike} </span>
        </div>

    )
}

export default Post