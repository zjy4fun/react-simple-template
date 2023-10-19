import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={addCount}>add</button>
    </>
  )
}

export default App
