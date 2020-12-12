import React from 'react';
import './Backdrop.scss';

const backdrop = (props) => (
    props.show ? <div className="ui-backdrop"></div> : null
);

export default backdrop;