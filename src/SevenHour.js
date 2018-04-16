import React from 'react';
import Card from './Card';

const SevenHour = (props) => {
  let sevenHourArray = props.data.map((hour, index) => {
    return <Card 
              title={ hour.hour } 
              icon={ hour.icon } 
              temp={ hour.temp } 
              container="tenDay" 
              key={ index } 
            />
  })
  
  return (
    <div className={ props.buttonState ? "seven-hour" : "hidden" } >
      { sevenHourArray }
    </div>
  )
}

export default SevenHour;