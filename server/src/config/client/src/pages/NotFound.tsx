import React from 'react'
import { Header } from '../components'
import './NotFound.scss'

export const NotFound = () => {
  return (
    <div className="page not-found">
      <Header/>
      <main className="main">
        <h2>404</h2>
        <h3>Page Not Found</h3>
      </main>
    </div>
  )
}
