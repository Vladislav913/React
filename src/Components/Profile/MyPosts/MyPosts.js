import React from "react";
import Post from "./Post/Post";
import s from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reduser";


const MyPosts = (props) => {
debugger
    let postsElements = props.posts.map(p => <Post message={p.message} userLike={p.userLike}/>)

    let newPostElements = React.createRef()

    let onAddPost = () => {
        props.addPost()

    }
    let onPostChange = () => {

        let text = newPostElements.current.value
        props.updateNewPostText(text)

    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElements}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts