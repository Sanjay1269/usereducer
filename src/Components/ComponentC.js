import React, { useContext } from 'react';
import CountContext from '../context-api/CountContext';
function ComponentC() {
    const context = useContext(CountContext)
  return <div>
      Count in ComponentC - {context.count}
      <button onClick={() => {
          context.dispatch('increment')
      }}> Click</button>
  </div>;
}

export default ComponentC;
