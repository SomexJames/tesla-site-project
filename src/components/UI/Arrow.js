import arrow from '../../assets/Arrow.png';
import React from 'react'
import './Arrow.css'

const Arrow = () => {

    return (
        <div className="arrow">
            <img src={arrow} alt="navigation-arrow" />
        </div>
    )
}

export default Arrow;