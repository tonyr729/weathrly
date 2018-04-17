import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import { read } from 'fs';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import MockObj from '../MockObj'

import App from '../App';
import Search from '../Search';
import CurrentWeather from '../CurrentWeather';
import ForecastToggle from '../ForecastToggle';
import SevenHour from '../SevenHour';
import TenDay from '../TenDay';

import LocalStorageMock from '../LocalStorageMock';
global.localStorage = new LocalStorageMock;

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

  it('should change the location in state based on user input', () => {
    let appInst = renderedApp.instance();
    appInst.getApiData = jest.fn();
    let expectation = 'denver';

    appInst.submitLocation(expectation);
    expect(renderedApp.state('location')).toEqual(expectation);
  })

  it('should toggle the forecast button values in state', () => {
    let appInst = renderedApp.instance();

    appInst.toggleForecastBtnState('tenDay');
    expect(renderedApp.state('sevenHourBtnClicked')).toEqual(false);
    expect(renderedApp.state('tenDayBtnClicked')).toEqual(true);

    appInst.toggleForecastBtnState('sevenHour');
    expect(renderedApp.state('sevenHourBtnClicked')).toEqual(true);
    expect(renderedApp.state('tenDayBtnClicked')).toEqual(false);
  })

  it('should render a welcome screen with a Search component', () => {

    expect(renderedApp.find(Search).length).toEqual(1)
  })

  it('should render a main screen with Search, CurrentWeather, ForecastToggle, SevenHour, and TenDay components', () => {
    renderedApp.setState({ apiData: MockObj });

    expect(renderedApp.find(Search).length).toEqual(1)
    expect(renderedApp.find(CurrentWeather).length).toEqual(1)
    expect(renderedApp.find(ForecastToggle).length).toEqual(1)
    expect(renderedApp.find(SevenHour).length).toEqual(1)
    expect(renderedApp.find(TenDay).length).toEqual(1)
  })

  it('should only render the main screen if apiData in state is not null', () => {
    expect(renderedApp.find('.Welcome').length).toEqual(1)
    expect(renderedApp.find(SevenHour).length).toEqual(0)

    renderedApp.setState({ apiData: MockObj });

    expect(renderedApp.find('.Welcome').length).toEqual(0)
    expect(renderedApp.find(SevenHour).length).toEqual(1)
  })


})

