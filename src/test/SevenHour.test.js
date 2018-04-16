import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import { read } from 'fs';
import MockObj from '../MockObj'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import SevenHour from '../SevenHour';
import Card from '../Card';

describe('Search', () => {
  let renderedSevenHour;
  const sevenHourArray = [
    {
      hour: '2PM',
      icon: 'sunny', 
      temp: '40',
      key: '0'
    },
    {
      hour: '3PM',
      icon: 'sleet', 
      temp: '41',
      key: '1'
    }
  ]
  
  it('should render the correct amount of Card components when given an array of size', () => {
    renderedSevenHour = shallow(<SevenHour data={sevenHourArray} />);
    
    expect(renderedSevenHour.find(Card).length).toEqual(2);
  })
})