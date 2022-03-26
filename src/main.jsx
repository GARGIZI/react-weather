import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { ADD_FAV_CITY, DELETE_ITEM, SHOW_DATA_CITY } from './actions.jsx';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const initialState = {
  cities: [],
  dataCity: [],
};

function appWeather(state = initialState, action) {
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

    case SHOW_DATA_CITY:
      return Object.assign({}, { dataCity: action.json });

    default:
      return state;
  }
}

const store = createStore(appWeather, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
