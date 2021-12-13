export const GET_POSTS = 'GET_POSTS'
export const CLOSE_POSTS = 'CLOSE_POSTS'

const defaultState = {
    posts: []
}

export default function postsReducer (state = defaultState, action){
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state, posts: action.payload
            }
        case CLOSE_POSTS:
            return {
                ...state, posts: []
            }
        default:
            return state
    }
}

export const addPostsToState = (posts) => ({
    type: GET_POSTS,
    payload: posts
})
export const deletePostsFromState = () => ({
    type: CLOSE_POSTS
})