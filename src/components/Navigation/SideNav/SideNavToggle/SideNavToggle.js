import React from 'react';
import './SideNavToggle.scss';

const sideNavToggle = (props) => {
    return (
        <i className="material-icons hide-on-large-only" onClick={props.clicked}>menu</i>
    )
}

export default sideNavToggle;