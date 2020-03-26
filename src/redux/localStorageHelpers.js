export function loadState(initialState){
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return initialState;
  }
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