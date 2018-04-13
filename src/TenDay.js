import React from 'react';
import Card from './Card';

const TenDay = (props) => {
 
  let tenDayArray = props.data.map(day => {
    let highLow = `${day.high} / ${day.low}`
    return <Card title={day.day} icon={day.icon} temp={highLow} />
  })
  

  return (
    <div className={props.buttonState ? "ten-day" : "hidden"}>
      {tenDayArray}
    </div>
  )
}

export default TenDay;