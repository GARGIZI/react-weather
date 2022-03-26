import { deleteItemStore } from '../actions.jsx';
import { useDispatch } from 'react-redux';

function FavoriteCities(props) {
  const dispatch = useDispatch();
  function deleteItem(e) {
    const parent = e.target.parentElement;
    const id = parent.id;
    const savedCities = JSON.parse(localStorage.getItem('savedCities'));
    const index = savedCities.indexOf(id);
    savedCities.splice(index, 1);
    localStorage.setItem('savedCities', JSON.stringify(savedCities));
    dispatch(deleteItemStore(id));
  }

  return (
    <div className="weather__weather-locat">
      <div className="weather__weather-title">Added Locations:</div>
      <div className="weather__weather-cities">
        <ul>
          {[...props.listCities].map((city) => (
            <li key={city} id={city}>
              <p onClick={props.showInfo}>{city}</p>
              <span onClick={deleteItem}>delete</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FavoriteCities;
