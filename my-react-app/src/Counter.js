import React, { useState } from 'react';

export function Counter() {
  const [value, setValue] = useState(0);

  function increment(e) {
    const updatedVal = e.target.value === 'inc'? value+1: value-1;
    setValue(updatedVal);
  }
  return (
    <div style={{ color: 'white', justifyItems: 'center' }}>
      <p>Value is :</p>
      <p > {value} </p>
      <div >
        <button  value='inc' onClick={increment} style={{ marginRight: '10px' }}>
          Increment
        </button>
        <button value='dec' onClick={increment}>
          Decrement
        </button>
      </div>

    </div>
  )
}

console.log('counter component');