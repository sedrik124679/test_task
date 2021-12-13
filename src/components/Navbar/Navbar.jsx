import React from 'react';
import MyInput from "../UI/MyInput/MyInput";
import './Navbar.scss'

const Navbar = ({searchQuery, setSearchQuery}) => {
    return (
        <div className={'navbar'}>
            <div className="navbar__logo">Lorem ipsum</div>
            <div className="input">
                <MyInput placeholder={'Search'} type={'text'} value={searchQuery} onChange={setSearchQuery}/>
            </div>
        </div>
    );
};

export default Navbar;