import React from 'react';
import './SideMenu.css';
import SideMenuItem from './SideMenuItem';
import LocaleItem from './LocaleItem';
import ScreenSize from '../hooks/ScreenSize';
import CloseIcon from '@material-ui/icons/Close';

const SideMenu = ({ sideMenu, setSideMenu }) => {
    const dimensions = ScreenSize();

    const menuItemsExt = [
        "model s",
        "model 3",
        "model x",
        "model y",
        "solar roof",
        "solar panels"
    ];

    const menuItemsCore = [
        "existing inventory",
        "used inventory",
        "trade-in",
        "test drive",
        "insurance",
        "cybertruck",
        "roadster",
        "semi",
        "charging",
        "powerwall",
        "commercial energy",
        "utilities",
        "find us",
        "support",
        "investor relations"
    ];

    var menuItems;

    if (dimensions.width < 1200) {
        menuItems = menuItemsExt.concat(menuItemsCore);
    } else {
        menuItems = menuItemsCore;
    }

    return (
        <div className={`sideMenu-${sideMenu}`}>
            <div className='sideMenu__close'>
                <button type="button" onClick={() => setSideMenu(!sideMenu)}>
                    <CloseIcon />
                </button>
            </div>
            <div className='sideMenu__content'>
                {
                    menuItems.map((item) => <SideMenuItem item={item} />)
                }
            {/* <LocaleItem /> */}
            </div>
        </div>
    )
}

export default SideMenu