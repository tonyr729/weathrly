import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <h3 className="title">{ props.title }</h3>
      <img src={`/weather-icons/${ props.icon }.png`}
           alt="weather icon"
           />
      <h3 className="temp">{ props.temp } ℉</h3>
    </div>
  )
}

export default Card;