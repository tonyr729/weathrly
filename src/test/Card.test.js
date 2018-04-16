import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import { read } from 'fs';
import MockObj from '../MockObj'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Card from '../Card';

describe('Search', () => {
  let renderedCard;

  beforeEach(() => {
    renderedCard = shallow(<Card title='9AM' 
                                 icon='mostlycloudy' 
                                 temp='40' 
                                 container="tenDay" 
                                 key='1' />);
  })

  it('When given props Card renders as expected', () => {
    expect(renderedCard.find('.title').text()).toEqual('9AM');
    expect(renderedCard.find('img').html()).toEqual('<img src=\"/weather-icons/mostlycloudy.png\" alt=\"weather icon\"/>');
    expect(renderedCard.find('.temp').text()).toEqual('40 ℉');
  })
})