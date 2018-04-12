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
      apiData: {},
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
    //set state for city and state
  }
  
  render() {
    return (
      <div className="App">
        {/* <Search submitLocation={ this.submitLocation }  /> */}
        {/* <CurrentWeather currentWeather={this.currentDayObject} />
        <button className="seven-hour-button">7 hour</button>
        <button className="ten-day-button">10 day</button> */}
        {/* <SevenHour data={this.cleanApiData.sevenHourArray}/>  */}
        {/* <TenDay data={this.createTenDayArray()}/> */}
      </div>
    );
  }
}

export default App;
