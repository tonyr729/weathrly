import React from 'react';




const Card = (props) => {
  return (
    <div className="card">
      <h3>{ props.title }</h3>
      <img src={`/weather-icons/${ props.icon }.png`} />
      {/* <img src={ partlycloudy } /> */}
      {/* <i class="wu wu-black wu-256 wu-{ props.icon }"></i> */}
      <h3>{ props.temp } ℉</h3>
    </div>
  )
}

export default Card;