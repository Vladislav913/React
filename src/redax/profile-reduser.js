const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState ={
    posts: [
        {message: 'How is qqqqqqqq', userLike: '5'},
        {message: 'How is bbbbbbbb', userLike: '3'},
        {message: 'How is qqqqrrrrq', userLike: '15'},
        {message: 'How is bbbbwdwsfs', userLike: '9'},
        {message: 'How is dfvdgfdgfdf', userLike: '4'},
    ],
    newPostText: '',
}

 const profileReduser = (state = initialState, action) =>{

     switch (action.type) {
         case ADD_POST:
             let newPost = {
                 message: state.newPostText,
                 userLike: 5
             }
             state.newPostText = ' '
             state.posts.push(newPost);
            return state
         case UPDATE_NEW_POST_TEXT:
             state.newPostText = action.newText;
             return state
     }


     return state
}

export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export let updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText:text
    }
}

export default profileReduser