import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCount]=useState(0)
  let increaseCounter =()=>{
    if(count<20){
      setCount(count+1)
    }
    else{
      alert("Maximum value is 20")
    }
  }
 let decreaseCounter =()=>{
  if(count>0){
    setCount(count-1)
  }
  else{
    alert("Minimum value is 0")
  }
 }

  return (
    <>
    <h1> COUNTER APP</h1>
    <h3>Count : {count}</h3>
    <button onClick={increaseCounter}>Increase</button>
    <br />
    <br />
    <button onClick={decreaseCounter}>Decrease</button>

    </>
  )
}

export default App
