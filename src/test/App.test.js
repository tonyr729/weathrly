import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//set up a beforeEach of varibles for fetch data to change in one place

describe('Current Weather', () => {

  it('should have a name of the current city', () => {
    //test this.name is equal to current city from API/moch data
  });

  it('should have a condition of the current weather', () => {
    //test this.condition is equal to current city condition
  });

  it('should know the current day', () => {
    //test this.day equals current day
  });

  it('should know the temprature', () => {
    //test this.temp is equal to current city temp
  });

  it('should know the current high and low temp', () => {
    //test this.highLow is equal to current city temp high and low
  });

  it('should know the summary of weather', () => {
    //test this.summary equals the data of weather observation data
  });

})

