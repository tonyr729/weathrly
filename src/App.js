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
      //location input (passed as prop from App.js),
      //7hour/10day toggle
    }
    this.cleanApiData = Cleaner(mockObj);
    debugger; 
  }
  

  
  
  submitLocation = ({city, state}) => {
  
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
