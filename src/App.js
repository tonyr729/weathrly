import React, { Component } from 'react';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import mockObj from './MockObj';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Cleaner from './Cleaner';
import ForecastToggle from './ForecastToggle'



class App extends Component {
  constructor() {
    super()
    this.state = {
      apiData: null,
      location: '',
      sevenHour: true,
      tenDay: false
    }

  this.getApiData = this.getApiData.bind(this);
  this.submitLocation = this.submitLocation.bind(this);
  this.toggleCardsDisplay = this.toggleCardsDisplay.bind(this);
  }
  
  getApiData() {
    if (this.state.location) {
      fetch(`http://api.wunderground.com/api/81347f06b321e144/conditions/forecast10day/hourly10day/q/${ this.state.location }.json`).then(response => {
        response.json().then(data => {
          let cleanData = Cleaner(data)
          this.setState({ apiData: cleanData })
        })
      }).catch(error => console.log(error))
    }
  }

  toggleCardsDisplay(buttonName) {
    if (buttonName === "sevenHour") {
      this.setState({ sevenHour: true, tenDay: false })
    } else {
      this.setState({ sevenHour: false, tenDay: true })
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
          <ForecastToggle toggleCardsDisplay={ this.toggleCardsDisplay }/>
          <SevenHour data={ this.state.apiData.sevenHourArray } buttonState={ this.state.sevenHour } /> 
          <TenDay data={ this.state.apiData.tenDayArray  } buttonState={ this.state.tenDay } />
        </div>
      );
    }
  }
}

export default App;
