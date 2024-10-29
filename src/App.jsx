import { useState } from 'react'

import './App.css'
import Header from './Header'
import Caroussel from './Caroussel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div>
  <Header/>
  <Caroussel/>
  
  </div>
    </>
  )
}

export default App
