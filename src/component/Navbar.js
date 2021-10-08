import React, { Component } from 'react'
import App from '../App'
const Navbar = (props) => {
    return (
        <div>
            <div className="Nav-bar" >
                <img className="cart-action-icon" src="https://image.flaticon.com/icons/png/512/1170/1170678.png" alt="cart-icon"></img>
                <span className="cart-count">{props.count}</span>

            </div>
        </div>
    )
}
export default Navbar