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
    balance: 27
  }
  const wallet = shallow(<Wallet {...props} />);
  it('renders properly', () => {
    expect(wallet).toMatchSnapshot();
  });
  it('displays the balance from props', () => {
    expect(wallet.find('span').text()).toEqual(props.balance.toString())
    
  })
});