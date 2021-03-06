import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reduser";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
debugger
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }


    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}
export default MyPostsContainer