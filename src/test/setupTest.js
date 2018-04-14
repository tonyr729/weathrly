import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow, configure} from 'enzyme';
import { read } from 'fs';
import MockObj from '../MockObj'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

