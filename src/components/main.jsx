import Now from '../components/now.jsx';
import FavoriteCities from './favoriteCities.jsx';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Details from './details.jsx';
import Navigation from './navigation.jsx';
import Forecast from './forecast.jsx';
import { addFavoriteCity } from '../actions.jsx';

function Main(props) {
  let cities = useSelector((state) => state.cities);
  let data = useSelector((state) => state.dataCity);
  console.log(cities);
  console.log(data);
  const dispatch = useDispatch();
  const [tabs, setTabs] = useState('now');

  function addFavCity() {
    const nameCity = data.name;
    const isCheck = cities.includes(nameCity);

    if (isCheck) {
      alert('Такой город уже есть в вашем списке');
      return;
    }

    dispatch(addFavoriteCity(nameCity));
  }

  useEffect(() => {
    const savedCities = JSON.parse(localStorage.getItem('savedCities')) || [];
    savedCities.forEach((item) => {
      dispatch(addFavoriteCity(item));
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('savedCities', JSON.stringify(cities));
  }, [cities]);

  async function showInfo(e) {
    const cityName = e.target.textContent;
    const request = sendRequest(cityName);
    const response = await (await request).json();

    props.useData(response);
  }

  function toggleTab(e) {
    const tab = e.target.textContent.toLowerCase();
    setTabs(tab);
  }

  return (
    <div className="weather__main">
      {tabs == 'now' ? <Now data={data} addFavCity={addFavCity}></Now> : null}
      {tabs == 'details' ? <Details data={data}></Details> : null}
      {tabs == 'forecast' ? (
        <Forecast data={data} listCities={cities}></Forecast>
      ) : null}
      <FavoriteCities listCities={cities} showInfo={showInfo}></FavoriteCities>
      <Navigation toggleTab={toggleTab}></Navigation>
    </div>
  );
}

export default Main;
