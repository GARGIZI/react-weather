import Now from '../components/now.jsx';
import FavoriteCities from './favoriteCities.jsx';
import { useState, useEffect } from 'react';
import sendRequest from '../sendRequest.js';
import Details from './details.jsx';
import Navigation from './navigation.jsx';
import Forecast from './forecast.jsx';

function Main(props) {
  const data = props.data;
  const [cities, setCities] = useState([]);
  const [tabs, setTabs] = useState({
    now: true,
    details: false,
    forecast: false,
  });

  function addFavoriteCity(e) {
    e.target.parentElement.classList.add('active');
    const isCheck = cities.includes(data.name);
    if (isCheck) {
      alert('Такой город уже есть в вашем списке');
      return;
    }

    setCities([...cities, data.name]);
  }

  useEffect(() => {
    setCities(JSON.parse(localStorage.getItem('savedCities')));
  }, []);

  useEffect(
    () => [localStorage.setItem('savedCities', JSON.stringify(cities))],
    [cities]
  );

  async function showInfo(e) {
    const cityName = e.target.textContent;
    const request = sendRequest(cityName);
    const response = await (await request).json();

    props.useData(response);
  }

  function toggleTab(e) {
    const tab = e.target.textContent.toLowerCase();

    switch (tab) {
      case 'now':
        setTabs({
          now: true,
          details: false,
          forecast: false,
        });
        break;
      case 'details':
        setTabs({
          now: false,
          details: true,
          forecast: false,
        });
        break;
      case 'forecast':
        setTabs({
          now: false,
          details: false,
          forecast: true,
        });
        break;
    }
  }

  // почему нельзя написать {<Now data={props.data} addFavoriteCity={addFavoriteCity}></Now> && tabs.now} ?
  return (
    <div className="weather__main">
      {tabs.now ? (
        <Now data={props.data} addFavoriteCity={addFavoriteCity}></Now>
      ) : null}
      {tabs.details ? <Details data={props.data}></Details> : null}
      {tabs.forecast ? (
        <Forecast data={props.data} listCities={cities}></Forecast>
      ) : null}
      <FavoriteCities listCities={cities} showInfo={showInfo}></FavoriteCities>
      <Navigation toggleTab={toggleTab}></Navigation>
    </div>
  );
}

export default Main;
