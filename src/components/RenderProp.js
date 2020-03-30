import React, { Fragment, useState } from 'react';

export default function RenderProp({ render }){
  let [count, setCount] = useState(0);
  function increment(){
    return setCount(count+=1);
  }
  return (
    <Fragment>
      {render(count, increment)}
    </Fragment>
  )
}