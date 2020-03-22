import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.js';
import { instanceOf } from 'prop-types';
Enzyme.configure({ adapter: new Adapter() });





describe('App', () => {
    const app = shallow(<App />);
    it("renders properly", () => {
      expect(app).toMatchSnapshot();
    });

    it('contains connected wallet component', () => {
      // console.log(app.debug())
      expect(app.find('Connect(Wallet)').exists()).toBe(true);
    })
});

