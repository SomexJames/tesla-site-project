import React from 'react'
import teslaLogo from '../../assets/teslaLogo.svg';
import CloseIcon from '@material-ui/icons/Close';
import './Navbar.css';

const Navbar = ({ sideMenu, setSideMenu }) => {
    const navbarProducts = [
        {
            title: "Model S",
            link: "https://www.tesla.com/models"
        },
        {
            title: "Model 3",
            link: "https://www.tesla.com/model3"
        },
        {
            title: "Model X",
            link: "https://www.tesla.com/modelx"
        },
        {
            title: "Model Y",
            link: "https://www.tesla.com/modely"
        },
        {
            title: "Solar Roof",
            link: "https://www.tesla.com/solarroof"
        },
        {
            title: "Solar Panels",
            link: "https://www.tesla.com/solarpanels"
        }
    ]

    return (
        <div className="navbar">
            <div className="navbar__logo">
                <a href='/'>
                    <img className="navbar__logoImg" src={teslaLogo} alt="Tesla Logo" />
                </a>
            </div>
            <div className="navbar__center">
                {navbarProducts.map((prod) =>
                    <a href={prod.link} target="_blank" rel="noopener noreferrer">
                        {prod.title}
                    </a>
                )}
            </div>
            <div className="navbar__right">
                <a href="https://shop.tesla.com/" target="_blank" rel="noopener noreferrer">Shop</a>
                <a href="/login">Account</a>
                <button type="button" className='navbar__menu' onClick={() => setSideMenu(!sideMenu)}>
                    {sideMenu ? <CloseIcon /> : "Menu"}
                </button>
            </div>
        </div>
    )
}

export default Navbar;