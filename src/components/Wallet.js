import React, { useState }  from 'react';
import { connect } from 'react-redux';

// great little hack
// export the component
// lets you avoid the redux boilderplate

export function Wallet({ balance }){
   const [amount, setAmount] = useState(null)
  return (
    <div>
      <h3>Wallet balance: <span data-testId="balance">{balance}</span></h3>
      <input 
        className='input-wallet'
        onChange={e => setAmount(e.target.value)}
        value={amount}
        type="number" />
    </div>
  )
}
function mapStateToProps(state){
  return {
    balance: state.balance
  }
}
// still export defauls, but above export hacks redux in tests
export default connect(mapStateToProps,null)(Wallet);