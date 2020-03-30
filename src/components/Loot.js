import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBitCoinFromApi } from '../redux/async'

export function Loot({ bitcoin, fetchBitCoinFromApi, balance }){
  useEffect(() => {
    fetchBitCoinFromApi();
    // console.log("fetch")
  });
  function calculateExchange(balance, rate){
    // console.log(" >>>", balance, " ", rate, " ", balance/parseInt(rate.replace(",", "")))
    // 1 -> $3.00 
    // 1/3 x/6
    // $6.00 -> 2
    return 1/parseInt(rate.toString().replace(",", "")) * balance;
  }
  return (
    <div>
      <h3>USD: {balance}</h3>
      <p>Bitcoin: {calculateExchange(balance,bitcoin)} </p>
    </div>
  )
} 
function mapStateToProps(state){
  return {
    balance: state.balance,
    bitcoin: state.bitcoin,

  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchBitCoinFromApi: () => dispatch(fetchBitCoinFromApi())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Loot);