import React from 'react';
import './SideMenuItem.css';

const SideMenuItem = ({ item }) => {
    return (
        <div className="menuItem">
            <h4>{item}</h4>
        </div>
    )
}

export default SideMenuItem;