import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)
  // const passwordGenerator = useCallback(() => {
  //   let pass=""
  //   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  //   if(numberAllowed) str+="0123456789"
  //   if(charAllowed) str+="{}[]!@#$%^&*-_=+~`"
  //   for(let i=1;i<=length;i++){
  //     let char = Math.floor(Math.random() * str.length)
  //     pass+=str.charAt(char)
  //   }
  //   setPassword(pass)

  // }, [length,numberAllowed, charAllowed, setPassword])
  const passwordGenerator = useCallback(() => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "{}[]!@#$%^&*-_=+~`";

  let pass = "";
  let allChars = letters;

  if (numberAllowed) {
    pass += numbers[Math.floor(Math.random() * numbers.length)];
    allChars += numbers;
  }

  if (charAllowed) {
    pass += symbols[Math.floor(Math.random() * symbols.length)];
    allChars += symbols;
  }

  while (pass.length < length) {
    pass += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // shuffle
  pass = pass
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  setPassword(pass);
}, [length, numberAllowed, charAllowed]);

const copyPasswordToClipboard = useCallback(() => { 
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,999);
  window.navigator.clipboard.writeText(password)
},[password])
useEffect(() => {
  passwordGenerator()
},[length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password} 
          className='outline-none w-full py-1 px-3 text-white bg-transparent' 
          placeholder='password' 
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setnumberAllowed((prev) => !(prev));//reverse previous value
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            checked={charAllowed}
            id="characterInput"
            onChange={() => {
              setcharAllowed((prev) => !(prev));//reverse previous value
            }}
            />
            <label htmlFor='characterInput'>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}


export default App
