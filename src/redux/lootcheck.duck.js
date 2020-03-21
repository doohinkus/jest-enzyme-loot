export const SET_BALANCE = "SET_BALANCE";
export const DEPOSIT_AMOUNT = "DEPOSIT_AMOUNT";

export function setBalance(balance){
  return {
    type: SET_BALANCE,
    balance
  }
}

export function depositAmount(deposit){
  return {
    type: DEPOSIT_AMOUNT,
    deposit
  }
}

export function balanceReducer(state = { balance : 0 }, action){
  switch(action.type){
    case SET_BALANCE:
      return {
        ...state,
        balance: action.payload
      }
    case DEPOSIT_AMOUNT:
      return {
        ...state,
        balance: action.payload + state.balance
      }
    default:
      return state
  }

}