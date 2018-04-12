import React, { Component } from 'react';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import mockObj from './MockObj';
import SevenHour from './SevenHour';
import TenDay from './TenDay';

class App extends Component {
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

  submitLocation = ({city, state}) => {
    debugger;
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
      <div className="App">
        <Search submitLocation={ this.submitLocation }  />
        <CurrentWeather currentWeather={this.currentDayObject} />
        <button className="seven-hour-button">7 hour</button>
        <button className="ten-day-button">10 day</button>
        <SevenHour data={this.createSevenHourArray()}/> 
        <TenDay data={this.createTenDayArray()}/>
      </div>
    );
  }
}

export default App;
