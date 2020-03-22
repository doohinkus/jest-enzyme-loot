export const SET_BALANCE = "SET_BALANCE";
export const DEPOSIT = "DEPOSIT";
export const WITHDRAWL = "WITHDRAWL";

export function setBalance(balance){
  return {
    type: SET_BALANCE,
    balance
  }
}

export function depositAmount(deposit){
  return {
    type: DEPOSIT,
    deposit
  }
}
export function withdrawlAmount(withdrawl){
  return {
    type: WITHDRAWL,
    withdrawl
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
    case WITHDRAWL:
      return {
        ...state,
        balance: state.balance - action.payload
      }
    default:
      return state
  }

}