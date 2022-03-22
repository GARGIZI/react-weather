function FavoriteCities(props) {
  function deleteItem(e) {
    const parent = e.target.parentElement;
    const id = parent.id;
    const savedCities = JSON.parse(localStorage.getItem('savedCities'));
    const index = savedCities.indexOf(id);
    savedCities.splice(index, 1);
    props.listCities.splice(index, 1);
    localStorage.setItem('savedCities', JSON.stringify(savedCities));
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
