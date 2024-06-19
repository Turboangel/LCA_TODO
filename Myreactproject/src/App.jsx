
import './App.css'
import React from 'react'
import Todoproject from './Todoproject'
function App() {
  const inprogress = "in progress";

  return (
    <>
    <Todoproject message={inprogress}/>
    </>
  )
}

export default App
