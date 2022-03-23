export const ADD_FAV_CITY = 'addFavoriteCity';

export function addFavoriteCity(city) {
  return { type: ADD_FAV_CITY, city };
}
