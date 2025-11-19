import React, {useState} from 'react';

export function Toggle(){

  const [showText, setShowText] = useState(false);

  function updateToggle(e){
  setShowText(prev => !prev);
  }

return (
  <div style={{color: 'white'}}>
    {showText && (<p>Hello there! I was hidden all this while</p>)}
    <button value={showText} onClick={updateToggle}>Click to toggle</button>
  </div>
)
}