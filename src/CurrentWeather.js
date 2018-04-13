import React from 'react';

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="current-weather">
      <h2 className="selected-location">{ currentWeather.location }</h2>
      <section className="current-weather-info">
        <h1>{ currentWeather.currentInfo.temp }</h1>
        <p>{ currentWeather.currentInfo.condition }</p>
        <img src={ currentWeather.currentInfo.icon } />
      </section>
      <section className="current-day-forecast">
        <h4>{ currentWeather.currentInfo.day }</h4>
        <p className="day-high-low">High: { currentWeather.forecast.high } / Low: { currentWeather.forecast.low }</p>
        <p className="day-summary">{ currentWeather.forecast.summary }</p>
      </section>
    </div>
  )
 }

export default CurrentWeather;