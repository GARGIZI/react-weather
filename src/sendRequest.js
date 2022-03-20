import URL from './URL.js';

async function sendRequest(cityName) {
  const url = `${URL.SERVER_URL}?q=${cityName}&appid=${URL.API}&units=metric`;
  return await fetch(url);
}

export default sendRequest;
