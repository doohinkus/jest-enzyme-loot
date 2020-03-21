import {setBalance, SET_BALANCE, balanceReducer} from './lootcheck.duck.js';

describe('actions', () => {
  it('creates and action to set the balance', () => {
    const balance = 0;
    const expectedAction = {
      type: SET_BALANCE,
      balance
    }
    expect(setBalance(balance)).toEqual(expectedAction);
  });
})

describe('balance reducer', () => {
  it('sets a balance', () => {
    const amount =  10;
    const balance = {
      balance: amount
    }
    expect(balanceReducer({ balance : 0 }, { type: SET_BALANCE, payload: amount})).toEqual(balance)
  })
});