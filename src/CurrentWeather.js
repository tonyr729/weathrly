import React, {Component} from 'react';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import mockObj from './MockObj';

class CurrentWeather extends Component {
  constructor() {
    super()
    this.state = { mockObj }
  }

  render() {
    return (
      <div>
        <h1>Current Weather</h1>
        <button>Toggle Outlook</button>
        <SevenHour /> 
        <TenDay />
      </div>
    )
  }
}

export default CurrentWeather;


//<SevenHour /> needs prop of an array with objects - each object is an hour with properties of the hour(title), image(icon), temp(high)
//<TenDay /> needs prop of an array with objects - each object is a day with properties of the day(title), image(icon), high(high), low(low)