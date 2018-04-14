import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import { read } from 'fs';
import MockObj from '../MockObj'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Search from '../Search';
import App from '../App';

describe('Search', () => {
  let renderedSearch;

  beforeEach(() => {
    renderedSearch = shallow(<Search submitLocation={jest.fn()}/>);
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
    const spy = jest.spyOn(searchInst.props, 'submitLocation');
    
    searchInst.sendLocation(mockedEvent);

    expect(spy).toBeCalledWith(searchInst.state);
  })
  
  //simulate an event and test that our actual component method was invoked (not a mock method)
  it.skip('should call sendLocation method when the form is submitted', () => {
    const mockedEvent = { preventDefault: () => {} }
    const searchInst = renderedSearch.instance();
    const spy = jest.spyOn(searchInst, 'sendLocation');

    renderedSearch.find('form').simulate('submit', mockedEvent);
    
    expect(renderedSearch.sendLocation).toBeCalled();
  })

  //test render
  it('', () => {
    
  })
})