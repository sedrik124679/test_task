import React from 'react';
import {useDispatch} from "react-redux";
import {getPostsFromJSON} from "../../redux/actions/postsAction";
import './User.scss'

const User = ({user}) => {

    const dispatch = useDispatch()

    return (
        <div className={'cards-wrapper__card'}>
            <div className="card-container">
                <div className="user-info">
                    <div className="user-info__username">{user.name}</div>
                    <div className="user-info__user-email">{user.email}</div>
                    <div className="user-info__user-number">{user.address.city}</div>
                    <div className="user-info__user-number">{user.phone}</div>
                </div>
                <div className="user-button" onClick={() => dispatch(getPostsFromJSON(user.id))}>
                    Lorem ipsum
                </div>
            </div>
        </div>
    );
};

export default User;