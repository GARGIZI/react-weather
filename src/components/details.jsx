import { format } from 'date-fns';

function Details(props) {
  const data = props.data;
  const isEmpty = () => !Object.keys(data).length;
  return (
    <div className="weather__main-item">
      <div className="weather__weather">
        <div className="weather__weather-main">
          <div className="weather__weather-city second">
            {data.name || 'City'}
          </div>
          <div className="weather__weather-list">
            <ul>
              <li>
                Temperature:
                <span className="details__temp">
                  {isEmpty() ? '14' : Math.round(data.main.temp)}
                </span>
              </li>
              <li>
                Feels like:
                <span className="details__feelsTemp">
                  {isEmpty() ? '14' : Math.round(data.main.feels_like)}
                </span>
              </li>
              <li>
                Weather:
                <span className="details__weather">
                  {isEmpty() ? '14' : data.weather[0].main}
                </span>
              </li>
              <li>
                Sunrise:
                <span className="details__sunrise">
                  {isEmpty()
                    ? '7'
                    : format(new Date(data.sys.sunrise * 1000), 'hh:mm')}
                </span>
              </li>
              <li>
                Sunset:
                <span className="details__sunset">
                  {isEmpty()
                    ? '7'
                    : format(new Date(data.sys.sunset * 1000), 'hh:mm')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
