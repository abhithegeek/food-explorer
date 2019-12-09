/*
 * Warning: This is not the best approach to do it because
 * Create-react-app will put the API ke from .env.development.local
 * to this file during compile time. So technically this is not safe.
 * Best way would be to fetch this API KEY from server API and keep
 * it in memory for the duration of the session.
 */
const API_KEY = process.env.REACT_APP_API_KEY;
const FOOD_DATA_API_KEY_ITEM = 'FOOD_DATA_API_KEY';

export default function getApiKey() {
    let apiKey = sessionStorage.getItem(FOOD_DATA_API_KEY_ITEM);
    if (!apiKey) {
        // First make API call to backend to get the API KEY.
        apiKey = API_KEY;
        sessionStorage.setItem(FOOD_DATA_API_KEY_ITEM, apiKey);
    }
    return apiKey;
}