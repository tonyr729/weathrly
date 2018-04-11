import React, { Component } from 'react';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <CurrentWeather />
      </div>
    );
  }
}

export default App;
