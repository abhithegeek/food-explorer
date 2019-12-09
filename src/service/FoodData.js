import customFetch from '../util/fetch-wrapper';
import getApiKey from './ApiKey';

const ENDPOINT = 'https://api.nal.usda.gov/fdc/v1';

export async function searchFoods(searchOptions = {}) {
  const API_KEY = getApiKey();
  const url = `${ENDPOINT}/search?api_key=${API_KEY}`;
  const searchCriteria = getSearchCriteria(searchOptions);

  const result = await customFetch(url, searchCriteria);

  return result;
};

export async function getFoodDetails(foodId) {
  const API_KEY = getApiKey();
  const url = `${ENDPOINT}/${foodId}?api_key=${API_KEY}`;

  const result  = await customFetch(url);

  return result
};

function getSearchCriteria(searchOptions) {
  return {
    generalSearchInput: searchOptions.searchFilter || '',
    ingredients: searchOptions.ingredients || '',
    brandOwner: searchOptions.brandOwner || '',
    includeDataTypes: {
      'Survey (FNDDS)': searchOptions.includeSurvey || false,
      Foundation: searchOptions.includeFoundation || false,
      Branded: searchOptions.includeBranded || false
    },
    pageNumber: searchOptions.pageNumber || 1,
    requireAllWords: true,
    sortField: 'lowercaseDescription.keyword',
    sortDirection: 'asc',
  };
}