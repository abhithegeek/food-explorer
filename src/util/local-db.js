const DB_TABLE = 'FAVORITE_FOODS';

export default {
    getAllRows: function () {
        const data = localStorage.getItem(DB_TABLE);

        let result = [];

        if (data) {
            result = JSON.parse(data);
        }

        return result;
    },

    addRow: function (row) {
        const data = localStorage.getItem(DB_TABLE);
        let records = [];

        if (data) {
            records = JSON.parse(data);
        }

        let found;

        records.some((record, index) => {
            if (record.id === row.id) {
                found = index;
                return true;
            }
            return false;
        });

        if (!found) {
            records.push(row);
            localStorage.setItem(DB_TABLE, JSON.stringify(records));
        }
    },

    deleteRow: function (rowId) {
        const data = localStorage.getItem(DB_TABLE);
        let records = [];

        if (data) {
            records = JSON.parse(data);
        }

        let found;

        records.some((record, index) => {
            if (record.id === rowId) {
                found = index;
                return true;
            }
            return false;
        });

        if (found) {
            records.splice(found, 1);
            localStorage.setItem(DB_TABLE, JSON.stringify(records));
        }
    }
}
