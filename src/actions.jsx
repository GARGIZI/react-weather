export const ADD_FAV_CITY = 'addFavoriteCity';
export const DELETE_ITEM = 'deleteItem';
export const SHOW_CITY_INFO = 'showCityInfo';

export function addFavoriteCity(city) {
  return { type: ADD_FAV_CITY, city };
}

export function deleteItemStore(id) {
  return { type: DELETE_ITEM, id };
}

export function showCityInfo(json) {
  return { type: SHOW_CITY_INFO, json };
}
