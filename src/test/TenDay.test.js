import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import { read } from 'fs';
import MockObj from '../MockObj'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import TenDay from '../TenDay';
import Card from '../Card';

describe('Search', () => {
  let renderedTenDay;
  const tenDayArray = [
    {
      day: 'Wednesday',
      icon: 'sunny', 
      high: '90',
      low: '10',
      key: '0'
    },
    {
      day: 'Thursday',
      icon: 'snow', 
      high: '90',
      low: '10',
      key: '1'
    }
  ]
  
  it('should render the correct amount of Card components when given an array of size', () => {
    renderedTenDay = shallow(<TenDay data={tenDayArray} />);
    
    expect(renderedTenDay.find(Card).length).toEqual(2);
  })
})