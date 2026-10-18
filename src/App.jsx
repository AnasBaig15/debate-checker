import { useState } from 'react' 
import './App.css'
import ArgumentValidator from './components/ArgumentValidator'
import Header from './components/Header'

function App() { 
  return (
    <>
      <Header />
      <ArgumentValidator />
    </>
  )
}
 
export default App
