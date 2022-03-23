import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ADD_FAV_CITY, addFavoriteCity } from './actions.jsx';

const initialState = {
  cities: [],
};

function appWeather(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV_CITY:
      return Object.assign({}, state, {
        cities: [
          ...state.cities,
          {
            favorite: false,
          },
        ],
      });

    default:
      return state;
  }
}

const store = createStore(appWeather);

console.log(store.getStore());

ReactDOM.render(
  <React.StrictMode store={store}>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
