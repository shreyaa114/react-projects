import React, {useState} from 'react';

export function Input(){
  const [val, setVal] = useState('');

  function updateText(e){
    setVal(e.target.value)
  }

return (
  <div style={{color: 'white'}}>
    {val && (<p>{val}</p>)}
    <input type ='text' value={val} placeholder='Enter text' onChange={updateText}/>
  </div>
)
}