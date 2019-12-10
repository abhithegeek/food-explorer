const DB_TABLE = 'FAVORITE_FOODS';
const ID_ATTRIBUTE = 'fdcId';

/* Implement local-db using local storage.
 * DB_TABLE is an object (map). fdcId is the
 * key for the map and value is the object itself.
 */
export default {
    getAllRows: function () {
        const data = localStorage.getItem(DB_TABLE);

        let result = {};

        if (data) {
            result = JSON.parse(data);
        }

        // return array of values.
        return Object.values(result);
    },

    getAllRowsMap: function () {
        const data = localStorage.getItem(DB_TABLE);

        let result = {};

        if (data) {
            result = JSON.parse(data);
        }

        return result;
    },


    addRow: function (row) {
        let records = {};
        const data = localStorage.getItem(DB_TABLE);

        if (data) {
            records = JSON.parse(data);
        }

        const key = row[ID_ATTRIBUTE];
        records[key] = row;

        localStorage.setItem(DB_TABLE, JSON.stringify(records));
    },

    deleteRow: function (rowId) {
        const data = localStorage.getItem(DB_TABLE);
        let records = [];

        if (data) {
            records = JSON.parse(data);
        }

        delete records[rowId];
        localStorage.setItem(DB_TABLE, JSON.stringify(records));
    }
}
