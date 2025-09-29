import React, { useCallback, useState, useEffect } from 'react'

const App = () => {

  const [ num, setNum]= useState(8);
  const [ includeNumbers, setIncludedNumbers] = useState(false);
  const [ includeChar, setIncludeChar] = useState(false);
  const [Password, setPassword] = useState('');

  const generatePassword = useCallback(()=>{
    let pass= "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(includeNumbers) str += "1234567890";
    if(includeChar) str += "!@#$%^&*()~{}?";
    for( let i = 1; i<= num; i++){
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index)
       
    } 
    setPassword(pass);
    
  },[num, includeNumbers, includeChar, setPassword])
  
  useEffect(()=>{
    generatePassword();
  },[num, includeNumbers, includeChar, setPassword])


  return (
    <div className='max-w-2xl bg-gray-500 mx-auto my-3 rounded-xl py-3 px-4'>
      <h1 className='text-center text-2xl font-bold m-1'>Password Generator</h1>
      <div className="flex rounded-md overflow-hidden border">
        <input
          type="text"
          placeholder="Passwordd"
          readOnly
          value={Password}
          className="w-full p-2 outline-0 bg-white text-black"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 cursor-pointer"
        >
          Copy
        </button>
      </div>
      <div className=' flex items-center gap-x-1 my-3 '>
        <input type="range" name="" id="" min={8} max={50} className="cursor-pointer" value={num} onChange={(e)=>{setNum(e.target.value)}} />
        <label >Length : ( {num} )</label>
        <input type="checkbox" defaultChecked = {includeNumbers} onChange={()=>{setIncludedNumbers(prev => !prev)}}/>
        <label > include Number</label>
        <input type="checkbox" defaultChecked = {includeChar} onChange={()=>{setIncludeChar(prev => !prev)}}/>
        <label > include Characters</label>
      </div>
    </div>
  )
}

export default App
