import React from 'react';

export default function SearchResults(props) {

    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Brand</th>
                    <th scope="col" className="d-none d-sm-table-cell">Ingredients</th>
                    <th scope="col">Favorite</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.records.map((record) => (
                        <tr key={record.fdcId}>
                            <td>{record.fdcId + record.description}</td>
                            <td>{record.brandOwner}</td>
                            <td className="d-none d-sm-table-cell">{record.ingredients}</td>
                            <td>{record.isFavorite ? 
                            (<button className="btn" onClick={() => props.onUnfavoriteClick(record)}>Unfavorite</button>) 
                            : (<button className="btn" onClick={() => props.onFavoriteClick(record)}>Add to Favorite</button>)}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

