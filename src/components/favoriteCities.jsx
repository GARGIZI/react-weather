function FavoriteCities(props) {
  function deleteItem(e) {
    const parent = e.target.parentElement;
    parent.parentElement.remove();
    const id = parent.parentElement.id;
    const savedCities = JSON.parse(localStorage.getItem('savedCities'));
    const index = savedCities.indexOf(id);
    savedCities.splice(index, 1);
    localStorage.setItem('savedCities', JSON.stringify(savedCities));
  }

  return (
    <div className="weather__weather-locat">
      <div className="weather__weather-title">Added Locations:</div>
      <div className="weather__weather-cities">
        <ul>
          {props.listCities.map((city) => (
            <li key={city} id={city}>
              <p onClick={props.showInfo}>{city}</p>
              <span onClick={deleteItem}>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-0.5"
                    x2="20.7803"
                    y2="-0.5"
                    transform="matrix(0.710506 0.703691 -0.65218 0.758064 1 1)"
                    stroke="#998899"
                  />
                  <line
                    y1="-0.5"
                    x2="20.8155"
                    y2="-0.5"
                    transform="matrix(0.693335 -0.720616 0.670126 0.742247 1.56787 16)"
                    stroke="#998899"
                  />
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FavoriteCities;
