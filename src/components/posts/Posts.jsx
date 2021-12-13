import React from 'react';
import './Posts.scss'
import Post from "../Post/Post";
import {useDispatch} from "react-redux";
import {closePostsBlock} from "../../redux/actions/postsAction";

const Posts = ({posts}) => {

    const dispatch = useDispatch()

    return (
        <div className='posts-container'>
            <div onClick={() => dispatch(closePostsBlock())}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" style={{'color': 'white', 'float': 'right', 'margin': '10px'}} fill="currentColor"
                     className="bi bi-x" viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            <div className="posts-wrapper">
                {posts.map(post => {
                    return <Post post={post} key={post.id} />
                })}
            </div>
        </div>
    );
};

export default Posts;