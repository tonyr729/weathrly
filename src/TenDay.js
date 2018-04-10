import React from 'react';
import Card from './Card';

const TenDay = (props) => {
  let tenDayArray = props.data.map(day => {
    return <Card title={day.title} icon={day.icon} temp="{day.high}{day.low}" />
  })

  return (
    <div className="tenDay">
      <ul>
        {tenDayArray}
      </ul>
    </div>
  )
}

export default TenDay;