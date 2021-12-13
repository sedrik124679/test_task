import React from 'react';

const Post = ({post}) => {
    return (
        <div className="post">
            <details>
                <summary className="post__title">{post.title}</summary>
                <div className="post__descr">{post.body}</div>
            </details>
            <hr/>
        </div>
    );
};

export default Post;