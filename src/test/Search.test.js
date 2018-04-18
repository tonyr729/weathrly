import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import { read } from 'fs';
import MockObj from '../MockObj'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Search from '../Search';
import App from '../App';
import DataList from '../DataList';

describe('Search', () => {
  let renderedSearch;
  let propFunction;

  beforeEach(() => {
    propFunction = jest.fn();
    renderedSearch = shallow(<Search submitLocation={propFunction}/>);

  })

  it('should have a default state of userInputLocation', () => {
    const expectation = '';

    expect(renderedSearch.state('userInputLocation')).toEqual(expectation)
  })
  
  it('should update the userInputLocation in state', () => {
    const searchInst = renderedSearch.instance();
    const expectedValue = 'kitten'
    const mockedEvent = { target: {value: expectedValue} }

    searchInst.updateLocation(mockedEvent)

    expect(renderedSearch.state('userInputLocation')).toEqual(expectedValue)
  })

  it('should send its state to App via submitLocation prop', () => {
    const mockedEvent = { preventDefault: () => {} }
    const searchInst = renderedSearch.instance();
    
    searchInst.sendLocation(mockedEvent);

    expect(propFunction).toBeCalledWith(searchInst.state.userInputLocation);
  })

  it('should render a form with two inputs and a DataList component', () => {
    expect(renderedSearch.find('input').length).toEqual(2)
    expect(renderedSearch.find(DataList).length).toEqual(1)
  })
})