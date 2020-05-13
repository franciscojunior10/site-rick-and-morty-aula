import React from 'react';

import './styles.css';

export default function CardContainer(props) {
    return <div className="card-container">{props.children}</div>
}