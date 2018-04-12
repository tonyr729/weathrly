import React from 'react';

const CurrentWeather = (props) => {
  debugger;
  return (
    <div className="current-weather">
      <h2 className="selected-location">{location}</h2>
      <section className="current-weather-info">
        <h1>{currentInfo.temp}</h1>
        <p>{currentInfo.condition}</p>
        <img src={currentInfo.icon} />
      </section>
      <section className="current-day-forecast">
        <h4>{currentInfo.day}</h4>
        <p className="day-high-low">High: {forecast.high} / Low: {forecast.low}</p>
        <p className="day-summary">{forecast.summary}</p>
      </section>
    </div>
  )
}

export default CurrentWeather;