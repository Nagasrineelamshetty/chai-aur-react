import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter]=useState(15); 
   //let counter=15;
   const addValue = () => {
    console.log("Value added",counter);
    counter=counter+1;
   }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button 
      onClick={addValue}> Add value</button>
      <button> Subtract value</button>
      <footer>Footer:{counter}</footer>  
    </>
  )
}

export default App
