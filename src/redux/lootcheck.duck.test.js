import {setBalance, 
  SET_BALANCE,
  DEPOSIT_AMOUNT,
  depositAmount,
  balanceReducer} from './lootcheck.duck.js';

describe('actions', () => {
  it('creates and action to set the balance', () => {
    const balance = 0;
    const expectedAction = {
      type: SET_BALANCE,
      balance
    }
    expect(setBalance(balance)).toEqual(expectedAction);
  });
  it('creates and action to deposit into balance', () => {
    const amount = 10;
    const expectedAction = {
      type: DEPOSIT_AMOUNT,
      deposit: amount
    }
    expect(depositAmount(amount)).toEqual(expectedAction); 
  });
})

describe('balance reducer', () => {
  it('sets a balance', () => {
    const amount =  10;
    const balance = {
      balance: amount
    }
    const action = { type: SET_BALANCE, payload: amount };
    const initialState = { balance : 0 }
    expect(balanceReducer(initialState, action)).toEqual(balance)
  });

  it('deposits into the balance', () => {
    const deposit = 5;
    const initialState = { balance : 0 }
    const action = { type: DEPOSIT_AMOUNT, payload: deposit}
    expect(balanceReducer(initialState, action)).toEqual({ balance: deposit })
  });
});