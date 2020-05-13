import React, { Component } from 'react';

import './styles.css';

export default class Select extends Component {
    componentWillUnmount() {
        console.log('Will Un Mount');
    }

    render() {
        const options = this.props.options;
        return(
            <select 
                className="select" 
                onChange={
                    (event) => 
                    this.props.handleChange(event.target.value)}
            >
                {options.map((option) => (
                    <option 
                        key={option} 
                        className="options" 
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
        );
    }
}