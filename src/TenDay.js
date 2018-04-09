import React from 'react';
import Card from './Card';

const TenDay = (props) => {
  let tenDayArray = props.map(day => {
    return <Card title={day.title} icon={day.icon} temp="{day.high}{day.low}" />
  })

  return (
    <div>
      <ul>
        {tenDayArray}
      </ul>
    </div>
  )
}

export default TenDay;