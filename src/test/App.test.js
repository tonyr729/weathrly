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

  it('when tenDay button is pressed, it should set sevenHourBtnClicked to false and tenDaybtnClicked to true in state', () => {
    let appInst = renderedApp.instance();
    appInst.toggleForecastBtnState('tenDay');

    expect(renderedApp.state('sevenHourBtnClicked')).toEqual(false);
    expect(renderedApp.state('tenDayBtnClicked')).toEqual(true);
  })

  it('when sevenHour button is pressed, it should set sevenHourBtnClicked to true and tenDaybtnClicked to false in state', () => {
    let appInst = renderedApp.instance();
    appInst.toggleForecastBtnState('tenDay');
    appInst.toggleForecastBtnState('sevenHour');

    expect(renderedApp.state('sevenHourBtnClicked')).toEqual(true);
    expect(renderedApp.state('tenDayBtnClicked')).toEqual(false);
  })

  it('should render a welcome screen with a Search component with the correct props', () => {
    let expected = { submitLocation: renderedApp.instance().submitLocation }

    expect(renderedApp.find(Search).length).toEqual(1)
    expect(renderedApp.find(Search).props()).toEqual(expected)
  })

  it('should render a main screen with a Search component with the correct props', () => {
    renderedApp.setState({ apiData: MockObj });
    let expected = { submitLocation: renderedApp.instance().submitLocation }
    
    expect(renderedApp.find(Search).length).toEqual(1)
    expect(renderedApp.find(Search).props()).toEqual(expected)
  })

  it('should render a main screen with a CurrentWeather component with the correct props', () => {
    renderedApp.setState({ apiData: { currentDayObject: 'kitten' } });
    let expected = { currentWeather: 'kitten' }

    expect(renderedApp.find(CurrentWeather).length).toEqual(1)
    expect(renderedApp.find(CurrentWeather).props()).toEqual(expected)
  })

  it('should render a main screen with a ForecastToggle component with the correct props', () => {
    renderedApp.setState({ apiData: MockObj });
    let expected = { toggleForecastBtnState: renderedApp.instance().toggleForecastBtnState }

    expect(renderedApp.find(ForecastToggle).length).toEqual(1)
    expect(renderedApp.find(ForecastToggle).props()).toEqual(expected)
  })

  it('should render a main screen with a SevenHour component with the correct props', () => {
    renderedApp.setState({ apiData: { sevenHourArray: 'kitten' } });
    let expected = { data: 'kitten' , buttonState: true}

    expect(renderedApp.find(SevenHour).length).toEqual(1)
    expect(renderedApp.find(SevenHour).props()).toEqual(expected)
  })
  it('should render a main screen with a TenDay component with the correct props', () => {
    renderedApp.setState({ apiData: { tenDayArray: 'kitten' } });
    let expected = { data: 'kitten' , buttonState: false}

    expect(renderedApp.find(TenDay).length).toEqual(1)
    expect(renderedApp.find(TenDay).props()).toEqual(expected)
  })

  it('should render the welcome screen if apiData in state is null', () => {
    renderedApp.setState({ apiData: null });
    
    expect(renderedApp.find('.Welcome').length).toEqual(1)
    expect(renderedApp.find(SevenHour).length).toEqual(0)
  })

  it('should render the main screen if apiData in state is not null', () => {
    renderedApp.setState({ apiData: MockObj });

    expect(renderedApp.find('.Welcome').length).toEqual(0)
    expect(renderedApp.find(SevenHour).length).toEqual(1)
  })

})

