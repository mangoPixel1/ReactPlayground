import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  //() => setNumber((number) => number - 1)

  return (
    <div id="main">
      <h1>Counter App</h1>
      <p class='number'>{number}</p>
      <div id="buttons">
        <button className='button plus-button' onClick={() => setNumber(number + 1)}>+</button>
        <button className='button minus-button' onClick={() => setNumber(number - 1)}>-</button>
      </div>
      <button className='button reset-button' onClick={() => setNumber(0)}>Reset</button>
    </div>
  );
}

export default App;
