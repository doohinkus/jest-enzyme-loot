import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../redux/lootcheck.duck';

// great little hack
// export the component
// lets you avoid the redux boilderplate

export function Wallet({ balance, deposit, withdraw }){
  const [amount, setAmount] = useState(0);  
  return (
    <div>
      <h3>Wallet balance: <span data-testid="balance">{balance}</span></h3>
      <input 
        className='input-wallet'
        onChange={e => setAmount(e.target.value)}
        value={Number(amount)}
        type="number" />
      <button className="btn-deposit" onClick={() => deposit(amount)}>Deposit</button>
      <button className="btn-withdraw" onClick={() => withdraw(amount)}>Withdraw</button>
    </div>
  )
}
function mapStateToProps(state){
  return {
    balance: state.balance
  }
}


function mapDispatchToProps(dispatch){
  return {
    deposit: (amount) =>  dispatch(deposit(Number(amount))),
    withdraw: (amount) =>  dispatch(withdraw(Number(amount))),
    dispatch
  }
}
// still export defauls, but above export hacks redux in tests
export default connect(mapStateToProps,mapDispatchToProps)(Wallet);