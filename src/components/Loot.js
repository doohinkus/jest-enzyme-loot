import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBitCoinFromApi } from '../redux/async'

export function Loot({ bitcoin, fetchBitCoinFromApi }){
  useEffect(() => {
    fetchBitCoinFromApi();
    // console.log("fetch")
  });
  // function calculateExchange(bitcoin, rate){
  //   return rate * bitcoin;
  // }
  return (
    <div>
      <h3>Bitcoin Balance: {bitcoin}</h3>
    </div>
  )
} 
function mapStateToProps(state){
  return {
    bitcoin: state.bitcoin
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchBitCoinFromApi: () => dispatch(fetchBitCoinFromApi())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Loot);