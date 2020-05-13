import React from 'react';

import './styles.css';

export default function Button(props) {
    return (
        <button 
            className="btn btn-secondary"
            type="button"
            onClick={props.onClick}
        >
            {props.name}
        </button>
    )
}