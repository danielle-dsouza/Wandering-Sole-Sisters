import React from 'react';
import './Item.scss';
import { NavLink } from 'react-router-dom';

const Item = (props) => (
    <li className="nav-item">
        <NavLink to={props.link}>{props.children}</NavLink>
    </li>
);

export default Item;