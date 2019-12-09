import localDb from '../util/local-db';

export function getFavoriteFoods() {
    return localDb.getAllRows().map(row => {
        return {
            fdcId: row.id,
            description: row.description
        };
    });
}

export function addFavoriteFood(food) {
    return localDb.addRow({
        id: food.fdcId,
        description: food.description
    });
}

export function deleteFavoriteFood(foodId) {
    return localDb.deleteRow(foodId);
}
