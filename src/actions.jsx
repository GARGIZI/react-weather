export const ADD_FAV_CITY = 'addFavoriteCity';
export const DELETE_ITEM = 'deleteItem';
export const SHOW_DATA_CITY = 'showDataCity';

export function addFavoriteCity(city) {
  return { type: ADD_FAV_CITY, city };
}

export function deleteItemStore(id) {
  return { type: DELETE_ITEM, id };
}

export function showDataCity(json) {
  return { type: SHOW_DATA_CITY, json };
}
