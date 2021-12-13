import React from 'react';
import './MySelect.scss'

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value}
                onChange={e => onChange(e.target.value)}
                className={'my-select'}
        >
            <option value="" disabled>{defaultValue}</option>
            {options.map(option => {
                return <option key={option.value} value={option.value}>{option.name}</option>
            })}
        </select>

    );
};
export default MySelect;