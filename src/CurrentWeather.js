import React, {Component} from 'react';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import mockObj from './MockObj';

class CurrentWeather extends Component {
  constructor() {
    super()
    this.state = {
      //location input (passed as prop from App.js),
      //7hour/10day toggle
    }
    this.currentDayObject = {
      location: mockObj.current_observation.display_location.full,
      currentInfo: {
        day: mockObj.forecast.txt_forecast.forecastday[0].title,
        condition: mockObj.current_observation.weather,
        temp: mockObj.current_observation.temp_f,
        icon: mockObj.current_observation.icon_url
      },
      forecast: {
        high: mockObj.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        low: mockObj.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        summary: mockObj.forecast.txt_forecast.forecastday[0].fcttext_metric
      }
    }
  }

  createSevenHourArray = () => {
    return mockObj.hourly_forecast.reduce((cleanArray, hourObj, index) => {
      if (index < 7) {
        let newObj = {
          hour: hourObj.FCTTIME.civil, 
          icon: hourObj.icon_url, 
          temp: hourObj.temp.english 
        };
        cleanArray.push(newObj);
      }
      return cleanArray;
    }, []);
  }
  
  createTenDayArray = () => {
    return mockObj.forecast.simpleforecast.forecastday.map(day => {
      return {
        day: day.date.weekday,
        icon: day.icon_url,
        high: day.high.fahrenheit,
        low: day.low.fahrenheit
      }
    });
  };
  
  render() {
    return (
      <div>
        <h2>{this.currentDayObject.location}</h2>
        <h1>{this.currentDayObject.currentInfo.temp}</h1>
        <p>{this.currentDayObject.currentInfo.condition}</p>
        <p>{this.currentDayObject.currentInfo.day}</p>
        <img src={this.currentDayObject.currentInfo.icon} />
        <p>{this.currentDayObject.forecast.high}</p>
        <p>{this.currentDayObject.forecast.low}</p>
        <p>{this.currentDayObject.forecast.summary}</p>
        <button>Toggle Outlook</button>
        <SevenHour data={this.createSevenHourArray()}/> 
        <TenDay data={this.createTenDayArray()}/>
      </div>
    )
  }
}

export default CurrentWeather;


//<SevenHour /> needs prop of an array with objects - each object is an hour with properties of the hour(title), image(icon), temp(high)
//<TenDay /> needs prop of an array with objects - each object is a day with properties of the day(title), image(icon), high(high), low(low)