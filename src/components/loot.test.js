import React, { useState } from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  { Loot } from './Loot';
Enzyme.configure({ adapter: new Adapter() });


describe('Loot', () => {
  // const useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
  // const mockFetchBitcoin = jest.fn();
  const props = {
    balance: 10,
    bitcoin: 0,
    mockFetchBitcoin: jest.fn()
  }
  let loot = shallow(<Loot {...props} />);
  it('renders properly', () => {
    expect(loot).toMatchSnapshot();
  });
  describe('when mounted', () => {
    it('dispatches the `fetchBitcoin()` from props', () => {
      props.mockFetchBitcoin();
      expect(props.mockFetchBitcoin).toHaveBeenCalled();
    })
  })
})