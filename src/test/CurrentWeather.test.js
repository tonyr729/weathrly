import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import { read } from 'fs';
import MockObj from '../MockObj'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import CurrentWeather from '../CurrentWeather';

describe('Search', () => {
  const currentWeatherProp = {
    location: 'Denver, CO',
    currentInfo: {
      day: 'Wednesday',
      condition: 'Sunny',
      temp: '80',
      icon: 'sunny'
    },
    forecast: {
      high: '90',
      low: '10',
      summary: 'Crazy weather today. Stay inside.'
    }
  }
  
  it('When given props CurrentWeather renders as expected', () => {
    const renderedCurrentWeather = shallow(<CurrentWeather currentWeather={currentWeatherProp}/>)

    expect(renderedCurrentWeather.find('.selected-location').text()).toEqual('Denver, CO');
    expect(renderedCurrentWeather.find('.current-weather-temp').text()).toEqual('80');
    expect(renderedCurrentWeather.find('.current-weather-condition').text()).toEqual('Sunny');
    expect(renderedCurrentWeather.find('.current-weather-icon').html()).toEqual('<img class=\"current-weather-icon\" src=\"/weather-icons/sunny.png\" alt=\"current weather icon\"/>');
    expect(renderedCurrentWeather.find('.current-weather-day').text()).toEqual('Wednesday');
    expect(renderedCurrentWeather.find('.day-high-low').text()).toEqual('High: 90 / Low: 10');
    expect(renderedCurrentWeather.find('.day-summary').text()).toEqual('Crazy weather today. Stay inside.');

  })
})