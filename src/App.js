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
      rendered: false,
      apiData: mockObj,
      city: 'San_Francisco',
      state: 'CA'
      //7hour/10day toggle
    }
    // this.cleanApiData = Cleaner(mockObj);
  }
  
  componentDidMount() {
    fetch(`http://api.wunderground.com/api/81347f06b321e144/conditions/forecast10day/hourly10day/q/${this.state.state}/${this.state.city}.json`).then(response => {
      response.json().then(data => {
        let cleanData = Cleaner(data)
        this.setState({apiData: cleanData})
      })
    }).catch(error => console.log(error))
  }
  
  
  submitLocation = ({city, state}) => {
    console.log(city, state)
    // this.setState({city: city, state: state})
  }
  
  render() {
    if (!this.state.rendered) {
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
