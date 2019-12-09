import localDb from '../util/local-db';

export function getFavoriteFoods() {
    return localDb.getAllRows();
}

export function addFavoriteFood(food) {
    const {fdcId, description} = food;

    return localDb.addRow({fdcId, description});
}

export function deleteFavoriteFood(foodId) {
    return localDb.deleteRow(foodId);
}
