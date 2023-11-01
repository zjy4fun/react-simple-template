import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="container flex justify-center items-center">
      <div className='counter flex justify-center items-center'>
        <div>{count}</div>
        <button onClick={addCount} type='button'>add</button>
      </div>
    </div>
  )
}

export default App
