import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import './Header.css';

const Header = ({ sideMenu, setSideMenu }) => {
    return (
        <div className="header">
            <Banner />
            <Navbar sideMenu={sideMenu} setSideMenu={setSideMenu}/>
        </div>
    )
}

export default Header;