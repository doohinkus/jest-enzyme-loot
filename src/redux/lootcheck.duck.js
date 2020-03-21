export const SET_BALANCE = "SET_BALANCE";

export function setBalance(payload){
  return {
    type: SET_BALANCE,
    balance: payload
  }
}

export function balanceReducer(state = { balance : 0 }, action){
  switch(action.type){
    case SET_BALANCE:
      return {
        ...state,
        balance: action.payload
      }
    default:
      return state
  }

}