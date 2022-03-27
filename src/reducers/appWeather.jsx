import { ADD_FAV_CITY, DELETE_ITEM } from '../actions';

const initialState = {
  cities: [],
};

export function appWeather(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV_CITY:
      return Object.assign({}, state, {
        cities: [...state.cities, action.city],
      });

    case DELETE_ITEM:
      return Object.assign(
        {},
        { cities: state.cities.filter((city) => city !== action.id) }
      );

    default:
      return state;
  }
}
