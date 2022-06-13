import React from 'react'
import Arrow from '../UI/Arrow'
import './BlockContent.css'
const BlockContent = (props) => {

    return (
        <div className={`block-${props.index}`}>
            <div className="product" >
                <div className="product__info ">
                    <h1>{props.title}</h1>
                    <h4>
                        {props.description}
                        {props.descriptionSpan && <a href="https://www.tesla.com/support/taking-delivery?redirect=no" target="_blank" rel="noopener noreferrer">{props.descriptionSpan}</a>}
                    </h4>
                </div>
                {/* (Cursor pointer for now, link to where actual buttons on live site takes you to the page right before payment, seems risky. Think of alternatives) */}
                <div className="buttons">
                    <div className="product__buttons">
                        <button className="button__left">{props.leftButton}</button>
                        {props.rightButton &&
                            <button className="button__right">{props.rightButton}</button>
                        }
                    </div>
                    {props.index !== "7" ? <Arrow /> : <div className="blankArrow"/>}
                </div>
            </div>
        </div>
    )
}

export default BlockContent;