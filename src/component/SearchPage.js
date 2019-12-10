/* eslint-disable no-unused-vars*/
import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Pagination from './Pagination';
import { searchFoods } from '../service/FoodData';
import { addFavoriteFood, deleteFavoriteFood } from '../service/FavoriteFoods';

export default function SearchPage(props) {
    const [searchCriteria, setSearchCriteria] = useState({});
    const [currentPage, setCurrentPage] = useState('1');
    const [totalPages, setTotalPages] = useState('1');
    const [totalFoods, setTotalFoods] = useState('0');
    const [records, setRecords] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const searchOptions = Object.assign({}, searchCriteria, { pageNumber: currentPage });
        searchFoods(searchOptions).then((result) => {
            setRecords(result.foods);
            setTotalPages(result.totalPages);
            setTotalFoods(result.totalHits);

            // Toggle for refresh.
            setIsFavorite(false);
        });
    }, [searchCriteria, currentPage, isFavorite]);

    function handleSearch(event) {
        let data = new FormData(event.target);

        const newSearchCriteria = {
            description: data.get('description'),
            ingredients: data.get('ingredients'),
            brandOwner: data.get('brandOwner')
        };

        setSearchCriteria(newSearchCriteria);

        event.preventDefault();
    }

    function handlePagination(event) {
        let data = new FormData(event.target);

        setCurrentPage(data.get('pageNumber'));

        event.preventDefault();
    }

    function handleAddFavorite(food) {
        addFavoriteFood(food);
        // Toggle for refresh.
        setIsFavorite(true);
    }

    function handleUnfavorite(food) {
        deleteFavoriteFood(food);
        // Toggle for refresh.
        setIsFavorite(true);
    }

    return (
        <>
            <SearchForm onSubmit={handleSearch}></SearchForm>
            <Pagination onSubmit={handlePagination}
                totalPages={totalPages}
                totalFoods={totalFoods}>
            </Pagination>
            <SearchResults records={records} 
                onUnfavoriteClick={handleUnfavorite} 
                onFavoriteClick={handleAddFavorite}>
            </SearchResults>
        </>

    );
};
