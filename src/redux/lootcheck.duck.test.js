import {setBalance, 
  SET_BALANCE,
  DEPOSIT,
  WITHDRAW,
  deposit,
  cookieBalanceReducer,
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
      type: DEPOSIT,
      payload: amount
    }
    expect(deposit(amount)).toEqual(expectedAction); 
  });
})

describe('balance reducer', () => {
  describe('when initalizing', () => {
    it('sets a balance', () => {
      const amount =  10;
      const balance = {
        balance: amount
      }
      const action = { type: SET_BALANCE, payload: amount };
      const initialState = { balance : 0 }
      expect(balanceReducer(initialState, action)).toEqual(balance)
    });
  
    describe('then re-initializing', () => {
      it('reads the blanace from the cookie', () => {
         expect(cookieBalanceReducer(undefined, { type: SET_BALANCE }))
           .toEqual(balance)
      })
    })
  
    it('deposits into the balance', () => {
      const deposit = 5;
      const initialState = { balance : 0 }
      const action = { type: DEPOSIT, payload: deposit }
      const result = initialState.balance + deposit
      expect(balanceReducer(initialState, action)).toEqual({ balance: result })
    });
  
    it('withdraws from the balance', () => {
      const withdraw = 13;
      const initialState = {
        balance: 17
      }
      const action = { type: WITHDRAW, payload: withdraw };
      const result =  initialState.balance - withdraw;
      expect(balanceReducer(initialState, action)).toEqual({ balance: result })
    })
  })
});