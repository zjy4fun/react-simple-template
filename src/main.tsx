import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const a = 'aaa'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>jjjjjjjjjjjjjjjjjjjjjjjjjjjj{a}</div>

    <App />
  </React.StrictMode>,
)
