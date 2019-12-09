import React from 'react';

export default function SearchPage(props) {
    const description = React.createRef();
    const ingredients = React.createRef();
    function handleSearch(event) {

    }

    return (
        <fieldset>
            <form onSubmit={handleSearch}>
                <label>Description:
                <input type="text" ref={description}></input>
                </label>
                <label>Ingredients:
                <input type="text" ref={ingredients}></input>
                </label>
                <input type="submit" value="Search"></input>
            </form>
        </fieldset>
    );
};