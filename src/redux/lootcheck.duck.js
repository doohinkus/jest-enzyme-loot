export const SET_BALANCE = "SET_BALANCE";
export const DEPOSIT = "DEPOSIT";
export const WITHDRAW = "WITHDRAW";

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

export function balanceReducer(state = { balance : 0 }, action){
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
    default:
      return state
  }

}