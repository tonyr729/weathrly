import React from 'react';
import Card from './Card';

const SevenHour = (props) => {
  let sevenHourArray = props.data.map(hour => {
    return <Card title={hour.hour} icon={hour.icon} temp={hour.temp} container="tenDay"/>
  })
  
  return (
    <div className="seven-hour">
      {sevenHourArray}
    </div>
  )
}

export default SevenHour;