import React from 'react'
import {
  Route,
  Routes
} from 'react-router-dom'

import './App.scss'
import { SupporterMarquee } from './components/SupporterMarquee'
import {
  Cities,
  Contact,
  Join,
  Landing,
  Mods,
  News,
  NotFound,
  Roles,
  Rules,
  Shops,
} from './pages'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound/>}/>
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
      <SupporterMarquee/>
    </div>
  )
}

export default App
