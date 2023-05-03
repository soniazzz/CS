import { useState } from 'react';
export function MyButton(props) {
  const [count, setCount] = useState(100);
  const [show, setBool] = useState(true);

  const onclick = () => {
    alert("button pressed")
    setCount(count+100)
    setBool(!show)
  }
  
  return (
    <div>
    {show ? <h1>Shown</h1> : <h1>Not shown</h1>}
    <button onClick={onclick}>{props.title+" "+count}</button>
    </div>
    ); 
  }