import React from 'react';
import Card from './Card';

const SevenHour = (props) => {
  let sevenHourArray = props.map(hour => {
    return <Card title={hour.title} icon={hour.icon} temp={hour.temp} />
  })
  
  return (
    <div>
      <ul>
      {sevenHourArray}
      </ul>
    </div>
  )
}

export default SevenHour;