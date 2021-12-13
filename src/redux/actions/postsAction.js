import axios from "axios";
import {addPostsToState, deletePostsFromState} from "../reducers/postsReducer";

export const getPostsFromJSON = (userId) => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}&_limit=5`)

            dispatch(addPostsToState(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}
export const closePostsBlock = () => {
    return async dispatch => {
        dispatch(deletePostsFromState())
    }
}