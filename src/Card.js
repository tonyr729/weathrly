import React from 'react';


const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <img src={props.icon} />
      <h3>{props.temp} ℉</h3>
    </div>
  )
}

export default Card;