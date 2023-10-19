import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  
  return (
    <>
      <h1 className='bg-green-500 text-orange-300'>Shubham</h1>
      <Card username="Vinay" btnText="click me"/>
      <Card username="Dauli" />
    </>
  )
}

export default App
