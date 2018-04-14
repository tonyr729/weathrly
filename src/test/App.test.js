import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {

    it('should have a default state with apiData, location, sevenHourBtnClicked, tenDayBtnClicked', () => {

    })

    it('should change the location in state based on user input', () => {
      
    })

    it('should fetch Api data based on the location set in state', () => {
      
    })

    it('should toggle the forecast button values in state', () => {
      
    })

    it('should render a welcome screen with a Search component', () => {

    })

    it('should render a main screen with Search, CurrentWeather, ForecastToggle, SevenHour, and TenDay components', () => {
      
    })

    it('should only render the main screen if apiData in state is not null', () => {
      
    })
  

})

