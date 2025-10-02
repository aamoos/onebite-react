import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  
  return (
    <>
      <div>
        <h1>{ light }</h1>
        <button onclick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}>
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>{state}</h1>
        <button onclick={() => {
          setCount(state + 1);
        }}>+</button>
      </div>
    </>
  );
  
}

export default App
