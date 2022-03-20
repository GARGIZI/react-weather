import { format } from 'date-fns';

function Forecast(props) {
  const data = props.data;
  const dateNow = () => format(Date.now(), 'd');
  const isEmpty = () => !Object.keys(data).length;
  const day = format(Date.now(), 'PP').slice(0, 3);
  const time = format(Date.now(), 'p').slice(0, 5);

  return (
    <div className="weather__main-item" id="third">
      <div className="weather__weather">
        <div className="weather__weather-main">
          <div className="weather__weather-city second">
            {data.name || 'City'}
          </div>
          <div className="weather__weather-listBlock">
            {props.listCities.map((city) => (
              <div key={city} id={city} className="weather__weather-block">
                <div className="weather__weather-top">
                  <div className="time__date">
                    <p>{dateNow() + ' ' + day}</p>
                  </div>
                  <div className="time__time">
                    <p>{time}</p>
                  </div>
                </div>
                <div className="weather__weather-bottom">
                  <div className="weather__weather-bottomTemp">
                    <p>
                      Temperature:{' '}
                      {isEmpty() ? '14' : Math.round(data.main.temp)}
                    </p>
                    <p>
                      Feels like:{' '}
                      {isEmpty() ? '14' : Math.round(data.main.feels_like)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
