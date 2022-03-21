import React from 'react'
import {
  Route,
  Routes
} from 'react-router-dom'

import './App.scss'
import {
  Landing
} from './pages'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </div>
  )
}

export default App
