import { fetchBitCoin } from './lootcheck.duck';

export function fetchBitCoinFromApi(){
  return dispatch => {
    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(res => res.json())
    .then(json => dispatch(fetchBitCoin(json)))
  }
}