import React from 'react';

export default function SearchForm(props) {
    return (
        <label>Description: 
            <input type="text" 
                value={props.description} 
                onChange={props.setDescription}>
            </input>
        </label>

    );
}
