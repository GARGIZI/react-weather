import { showCityInfo } from './actions';
import URL from './URL';

export default function sendRequest(cityName) {
  return (dispatch) => {
    const url = `${URL.SERVER_URL}?q=${cityName}&appid=${URL.API}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => dispatch(showCityInfo(json)));
  };
}
