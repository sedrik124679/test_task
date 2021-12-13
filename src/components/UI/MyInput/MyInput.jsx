import React from 'react';
import './MyInput.scss'

const MyInput = (props) => {
    return (
        <input type={`${props.type}`} placeholder={`${props.placeholder}`} onChange={e => props.onChange(e.target.value)} value={props.value}/>
    );
};

export default MyInput;