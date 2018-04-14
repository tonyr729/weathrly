// import setupTest from './setupTest';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, configure } from 'enzyme';
import { read } from 'fs';
import MockObj from '../MockObj'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Search from '../Search'
import CurrentWeather from '../CurrentWeather'
import ForecastToggle from '../ForecastToggle'
import SevenHour from '../SevenHour'
import TenDay from '../TenDay'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  let renderedApp;
  beforeEach(() => {
    renderedApp = shallow(<App />);
  })

  it('should have a default state with apiData, location, sevenHourBtnClicked, tenDayBtnClicked', () => {
    let expected = {
      apiData: null,
      location: '',
      sevenHourBtnClicked: true,
      tenDayBtnClicked: false
    }

    expect(renderedApp.state('apiData')).toEqual(expected.apiData)
    expect(renderedApp.state('location')).toEqual(expected.location)
    expect(renderedApp.state('sevenHourBtnClicked')).toEqual(expected.sevenHourBtnClicked)
    expect(renderedApp.state('tenDayBtnClicked')).toEqual(expected.tenDayBtnClicked)

  })

  it.skip('should change the location in state based on user input', () => {
    let shallowApp = shallow(<App />)
    let appInst = shallowApp.instance()
    let expectation = 'denver'

    console.log(appInst.state)

    appInst.submitLocation(expectation);
    
    let waitLog = console.log(appInst.state)

    setTimeout(waitLog, 7000)
    
    expect(renderedApp.state('location')).toEqual(expectation);

  })

  it.skip('should fetch Api data based on the location set in state', () => {
    
  })

  it.skip('should toggle the forecast button values in state', () => {
    
  })

  it('should render a welcome screen with a Search component', () => {

    expect(renderedApp.find(Search).length).toEqual(1)

  })

  it('should render a main screen with Search, CurrentWeather, ForecastToggle, SevenHour, and TenDay components', () => {
    renderedApp.setState({ apiData: MockObj});
    
    expect(renderedApp.find(Search).length).toEqual(1)
    expect(renderedApp.find(CurrentWeather).length).toEqual(1)
    expect(renderedApp.find(ForecastToggle).length).toEqual(1)
    expect(renderedApp.find(SevenHour).length).toEqual(1)
    expect(renderedApp.find(TenDay).length).toEqual(1)

  })

  it('should only render the main screen if apiData in state is not null', () => {
    expect(renderedApp.find('h1').length).toEqual(1)
    expect(renderedApp.find(SevenHour).length).toEqual(0)

    renderedApp.setState({ apiData: MockObj});

    expect(renderedApp.find('Welcome').length).toEqual(0)
    expect(renderedApp.find(SevenHour).length).toEqual(1)

  })
  

})

