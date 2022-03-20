function Navigation(props) {
  return (
    <div className="weather__main-nav">
      <ul>
        <li className="active" onClick={props.toggleTab}>
          <a href="#" className="weather__main-link">
            Now
          </a>
        </li>
        <li onClick={props.toggleTab}>
          <a href="#" className="weather__main-link">
            Details
          </a>
        </li>
        <li onClick={props.toggleTab}>
          <a href="#" className="weather__main-link">
            Forecast
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
