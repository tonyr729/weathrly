import React, { Component } from 'react';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">weathrly</h1>
        </header>
        <Search />
        <CurrentWeather />
      </div>
    );
  }
}

export default App;
