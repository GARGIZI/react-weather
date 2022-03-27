import { SHOW_CITY_INFO } from '../actions';

const initialState = {
  dataCity: [],
};

export function showCityData(state = initialState, action) {
  switch (action.type) {
    case SHOW_CITY_INFO:
      return Object.assign({}, { dataCity: action.json });

    default:
      return state;
  }
}
