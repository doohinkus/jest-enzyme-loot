import React, { Fragment } from 'react';
import Wallet from './Wallet';
import Loot from './Loot';
// import RenderProp from './RenderProp';

// function ClickCounter1({ count, increment }){
//   return <Fragment>
//   {count}
//   <button onClick={() => increment()}>increment</button>
// </Fragment>
// }

function App(){

  return (
    <div>
      <h2>Loot Check</h2>
      < hr />
      <Wallet />
      <Loot />
      {/* render prop pattern component adds functions and renders new component */}
      {/* <RenderProp 
        render={(count, increment) => <ClickCounter1 count={count} increment={increment}/>} 
      />
      <RenderProp 
        render={(count, increment) => <ClickCounter1 count={count} increment={increment}/>} 
      /> */}
    </div>
  )
}

export default App;