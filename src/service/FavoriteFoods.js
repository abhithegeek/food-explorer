import localDb from '../util/local-db';

export function getFavoriteFoods() {
    return localDb.getAllRows();
}

export function addFavoriteFood(food) {
    return localDb.addRow(food);
}

export function deleteFavoriteFood(foodId) {
    return localDb.deleteRow(foodId);
}
