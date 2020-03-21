import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from './App.js';




describe('App', () => {
    const app = shallow(<App />);
    it("renders properly", () => {
      expect(app).toMatchSnapshot();
    })
})