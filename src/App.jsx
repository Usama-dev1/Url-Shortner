import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroArea from './components/HeroArea'
import TableArea from './components/TableArea'

const App = () => {
  //rerender tablearea component user enters a new url
  const[eurl,setEurl]=useState('')
  return (
    <>
    <Navbar/>
    <HeroArea setEurl={setEurl}/>
    <TableArea eurl={eurl}/>
    </>
  )
}

export default App