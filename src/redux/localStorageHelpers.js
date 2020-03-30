export function loadState(initialState){
  try {
    const serializedState = localStorage.getItem('state');
    // when there are no items or someone reshapes initialState, load initial state
    // JSON.stringify(data1) === JSON.stringify(data2)
    if (!serializedState) {
      return initialState;
    }
    // when there are items in local storage, load from local storage
    return JSON.parse(serializedState);
  } catch (err) {
    return initialState;
  }
}

function isChangeToShapeOfState(initialState, serializedState){
  const keys = JSON.parse(initialState);
   console.log("KEYSS>>>", keys)
   return initialState !== JSON.parse(serializedState);
}

export function saveState(state){
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err){
    // ignore write errors
    console.log(err);
    return undefined;
  }
}

export function localStorageMiddleWare({ getState }){

  return next => action => {
    console.log(`Current State: ${JSON.stringify(getState())}`)
    next(action);
    console.log(`Present/setLocalStorage ${JSON.stringify(getState())}`);
    saveState(getState());


  }

}