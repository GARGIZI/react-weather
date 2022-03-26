import URL from './URL';
import { showDataCity } from './actions.jsx';

export function asyncRequestStore(city) {
  const url = `${URL.SERVER_URL}?q=${city}&appid=${URL.API}&units=metric`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(showDataCity(json)));
  };
}
