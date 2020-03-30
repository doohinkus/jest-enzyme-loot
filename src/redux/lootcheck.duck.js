export const SET_BALANCE = "SET_BALANCE";
export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";
export const FETCH_BITCOIN = "FETCH_BITCOIN";

export function setBalance(balance){
  return {
    type: SET_BALANCE,
    balance
  }
}

export function deposit(deposit){
  return {
    type: DEPOSIT,
    payload: deposit
  }
}
export function withdraw(withdraw){
  return {
    type: WITHDRAW,
    payload: withdraw
  }
}

export function bitcoinData(data){
  return {
    type: FETCH_BITCOIN,
    payload: data
  }
}

export const initialState = { balance : 0, bitcoin: 0 };

export function balanceReducer(state = initialState, action){
  switch(action.type){
    case SET_BALANCE:
      return {
        ...state,
        balance: action.payload
      }
    case DEPOSIT:
      return {
        ...state,
        balance: action.payload + state.balance
      }
    case WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload
      }
    case FETCH_BITCOIN:
        return {
          ...state,
          bitcoin: action.payload
        }

    default:
      return state
  }

}

