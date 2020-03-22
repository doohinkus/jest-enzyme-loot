import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// great little hack
// export the component
// lets you avoid the redux boilderplate
import { Wallet } from './Wallet.js';




describe('Wallet', () => {
  const props = {
    balance: 27,
    amount: null
  }
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  const wallet = shallow(<Wallet {...props} />);
  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });
  it('displays the balance from props', () => {
    expect(wallet.find('span').text()).toEqual(props.balance.toString())
  });
  it('creates an input for deposit or withdrawl', () =>{
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });

  describe('when a user typed into the input-wallet field, then the state is updated', () => {
    const inputBalance = 27;
    // beforeEach(() => {
      
    // });
    it('updates the waller balance, converting it to a number', () => {
      wallet.find('.input-wallet')
      .simulate('change', { target: { value: inputBalance }})
      // console.log(wallet.find('.input-wallet').props().value, " ", )
      expect(wallet.find('.input-wallet').props().value).toEqual(Number(inputBalance))
    })
  })

});