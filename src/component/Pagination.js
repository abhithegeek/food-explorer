import React from 'react';

export default function SearchForm(props) {

    return (
        <>
            <span>Total Foods: {props.totalFoods}</span>
            <form onSubmit={props.onSubmit} className="form-inline my-2">
                <label>Showing Page:<input id="pageNumber" className="form-control ml-1" name="pageNumber" type="text" defaultValue="1" />&nbsp; / {props.totalPages}</label>
            </form>
        </>
    );
};