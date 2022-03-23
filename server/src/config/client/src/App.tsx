import React from 'react'
import {
  Route,
  Routes
} from 'react-router-dom'

import './App.scss'
import {
  Cities,
  Contact,
  Join,
  Landing,
  Mods,
  News,
  Roles,
  Rules,
  Shops,
} from './pages'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/cities" element={<Cities/>}/>
        <Route path="/shops" element={<Shops/>}/>
        <Route path="/roles" element={<Roles/>}/>
        <Route path="/mods" element={<Mods/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
