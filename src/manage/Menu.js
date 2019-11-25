import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    const activeStyle = {
        display: 'none'
    };

    return (
        <div className="Menu">
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink to="/Seatbook" activeStyle={activeStyle}>Seatbook</NavLink></li>
                <li><NavLink to="/Selector" activeStyle={activeStyle}>Selector</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;