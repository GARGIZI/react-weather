function Now(props) {
  const data = props.data;
  const isEmpty = () => !Object.keys(data).length;
  return (
    <div className="weather__weather">
      <div className="weather__weather-main">
        <div className="weather__weather-mainTemp">
          <p>{isEmpty() ? '14' : Math.round(data.main.temp)}</p>
        </div>
        <div className="weather__weather-bg">
          <img src="./img/icons8-cloud-96 1.png" alt="weather" />
        </div>
        <div className="weather__weather-city weather">
          {data.name || 'City'}
        </div>
        <button
          className="weather__weather-like"
          onClick={props.addFavoriteCity}
        >
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.54"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Now;
