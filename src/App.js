import React, { Component } from 'react';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Cleaner from './Cleaner';
import ForecastToggle from './ForecastToggle'
import fetchApi from './Api';

class App extends Component {
  constructor() {
    super()
    this.state = {
      apiData: null,
      location: '',
      sevenHourBtnClicked: true,
      tenDayBtnClicked: false
    }

  this.getApiData = this.getApiData.bind(this);
  this.submitLocation = this.submitLocation.bind(this);
  this.toggleForecastBtnState = this.toggleForecastBtnState.bind(this);
  }
  
  submitLocation({ userInputLocation }) {
    this.setState({ location: userInputLocation }, this.getApiData)
  }

  componentDidMount() {
    if (localStorage.weathrly) {
      this.setState({ location: localStorage.getItem(localStorage.key('weathrly')) }, this.getApiData);
    }
  }
  
  getApiData() {
    if (this.state.location) {
      fetchApi(this.state.location).then(response => {
        response.json().then(data => {
          if (data.response.error || !data.current_observation) {
            alert('Please enter a valid location')
            return;
          } else {
            let cleanData = Cleaner(data)
            this.setState({ apiData: cleanData })
            localStorage.setItem('weathrly', this.state.location);
          }
        })
      }).catch(error => console.log(error))
    }
  }

  //should we move this out of App? 
  toggleForecastBtnState(buttonName) {
    if (buttonName === 'sevenHour') {
      this.setState({ sevenHourBtnClicked: true, tenDayBtnClicked: false })
    } else {
      this.setState({ sevenHourBtnClicked: false, tenDayBtnClicked: true })
    }
  }
  
  displayWelcome() {
    return (
      <div className="App">
        <h1>Good Morning</h1>
        <Search submitLocation={ this.submitLocation }  />
      </div>
    )
  }

  displayApp() {
    return (
      <div className="App">
        <Search submitLocation={ this.submitLocation }  />
        <CurrentWeather currentWeather={ this.state.apiData.currentDayObject } />
        <ForecastToggle toggleForecastBtnState={ this.toggleForecastBtnState }/>
        <SevenHour data={ this.state.apiData.sevenHourArray } buttonState={ this.state.sevenHourBtnClicked } /> 
        <TenDay data={ this.state.apiData.tenDayArray } buttonState={ this.state.tenDayBtnClicked } />
      </div>
    )
  }
  
  render() {
    if (!this.state.apiData) {
      return this.displayWelcome();
    } else {
      return this.displayApp();
    }
  }
}

export default App;
