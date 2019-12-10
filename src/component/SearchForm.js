import React from 'react';

export default function SearchForm(props) {

    return (
        <form onSubmit={props.onSubmit}>
            <div className="form-group-row">
                <div className="col-sm-12 col-md-3">
                    <label htmlFor="description" className="col-form-label">Description:</label>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-4">
                    <input id="description" name="description" type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group-row">
                <div className="col-sm-12 col-md-3">
                    <label htmlFor="ingredients" className="col-form-label">Ingredients:</label>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-4">
                    <input id="ingredients" name="ingredients" type="text" className="form-control" />
                </div>
            </div>
            <div className="form-group-row">
                <div className="col-sm-12 col-md-3">
                    <label htmlFor="brandOwner" className="col-form-label">Brand Owner:</label>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-4">
                    <input id="brandOwner" name="brandOwner" type="text" className="form-control" />
                </div>
            </div>
            <div className="col-sm-12 my-3">
                <button className="btn">Search</button>
            </div>
        </form>
    );
};