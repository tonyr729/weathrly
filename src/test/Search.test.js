import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../Search';
import { shallow, configure } from 'enzyme';
import { read } from 'fs';
import MockObj from '../MockObj'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Search', () => {
  let renderedSearch;
    beforeEach(() => {
      renderedSearch = shallow(<Search submitLocation={() => {}}/>);
    })

  it('should have a default state with userInputLocation', () => {
    let expectation = '';

    expect(renderedSearch.state('userInputLocation')).toEqual(expectation)
  })

  //test props <--DO WE NEED TO TEST THIS? BUT HOW?
  it.skip('should have a property object containing a submitLocation function', () => {
    
  })

  //test updateLocation sets the state
  it.skip('should update the userInputLocation in state', () => {
    // updateLocation method
  })

  //test sendLocation - calls submitLocation
  it.skip('should send its state to App via submitLocation prop', () => {
    const mockedEvent = { preventDefault: () => {} }
    renderedSearch.find('form').simulate('submit', mockedEvent);

    //expect that it was called with state as the argument
    expect(renderedSearch.submitLocation).toHaveBeenCalledWith(renderedSearch.state);
  })
  
  it.skip('should call sendLocation method when the form is submitted', () => {
    const mockedEvent = { preventDefault: () => {} }
    renderedSearch.find('form').simulate('submit', mockedEvent);
    
    //expect that sendLocation was called
    expect(renderedSearch.submitLocation).toHaveBeenCalled()
  })

  //test render
  it('', () => {
    
  })
})