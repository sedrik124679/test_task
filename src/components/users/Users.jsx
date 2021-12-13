import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getUserFromJSON} from "../../redux/actions/userAction";
import User from "../user/User";
import Posts from "../posts/Posts";
import MySelect from "../UI/MySelect/MySelect";
import './Users.scss'
import Loader from "../UI/Loader/Loader";

const Users = ({searchQuery}) => {

    const dispatch = useDispatch()

    const isLoading = useSelector(state => state.users.isLoading)

    useEffect(() => {
        dispatch(getCurrentPage(1))
    }, [])

    const currentPage = useSelector(state => state.users.currentPage)

    const [selectedSort, setSelectedSort] = useState('')

    const [limit, setLimit] = useState(4)

    useEffect(() => {
        dispatch(getUserFromJSON(currentPage, limit))
    }, [currentPage])

    const users = useSelector(state => state.users.users)
    const posts = useSelector(state => state.posts.posts)

    const sortUsers = (sort) => {
        setSelectedSort(sort)
    }

    const sortedUsers = useMemo(() => {
        if(users){
            if(selectedSort) {
                return [...users].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
            }
        }
        return users
    }, [selectedSort, users])

    const searchUser = useMemo(() => {
        if(users) {
            return sortedUsers.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
        }
    }, [searchQuery, sortedUsers])

    if(isLoading) {
        return <Loader />
    }

    return (
        <>
            <div>
                <MySelect defaultValue={'Сортування'}
                          options={[
                              {value: 'name', name: 'По імені'}
                          ]}
                          value={selectedSort}
                          onChange={sortUsers}/>
            </div>
            <div className={'cards-wrapper'}>
                <div className="cards-wrapper-container">
                    {users
                        ? searchUser.length
                            ? searchUser.map(user => {
                                return <User user={user} key={user.id} />})
                            : <h4 className={'user-not-found'}>Такого користувача немає</h4>
                        : <Loader />
                    }
                </div>

                {posts.length !== 0 && <Posts posts={posts} />}

            </div>
        </>
    );
};

export default Users;