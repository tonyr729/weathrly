import React, { Component } from 'react';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import mockObj from './MockObj';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Cleaner from './Cleaner';



class App extends Component {
  constructor() {
    super()
    this.state = {
      apiData: null,
      location: ''
      //7hour/10day toggle
    }

  this.getApiData = this.getApiData.bind(this);
  this.submitLocation = this.submitLocation.bind(this);
  }
  
  getApiData() {
    if (this.state.location) {
      fetch(`http://api.wunderground.com/api/81347f06b321e144/conditions/forecast10day/hourly10day/q/${ this.state.location }.json`).then(response => {
        response.json().then(data => {
          let cleanData = Cleaner(data)
          debugger;
          this.setState({ apiData: cleanData })
        })
      }).catch(error => console.log(error))
    }
  }
  
  submitLocation({ userInputLocation }) {
    this.setState({ location: userInputLocation }, this.getApiData)
  }

  //displayWelcome()
  //displayApp()
  
  //put conditional inside the return, inside the App div
  render() {
    if (!this.state.apiData) {
      return (
        <div className="App">
          <Search submitLocation={ this.submitLocation }  />
        </div>
      )
    } else {
      return (
        <div className="App">
          <Search submitLocation={ this.submitLocation }  />
          <CurrentWeather currentWeather={ this.state.apiData.currentDayObject } />
          <button className="seven-hour-button">7 hour</button>
          <button className="ten-day-button">10 day</button>
          <SevenHour data={ this.state.apiData.sevenHourArray } /> 
          <TenDay data={ this.state.apiData.tenDayArray }/>
        </div>
      );
    }
  }
}

export default App;
