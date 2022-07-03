import React from 'react'

import './Landing.scss'
import { Header } from '../components'
//@ts-ignore
import welcomeImg from '../assets/2022-03-12_19-05-09.png'

export const Landing = () => {
  return (
    <div className="page">
      <Header/>
      <main className="main landing">
        <h2>Welcome to Elsewhere</h2>
        <img
          className="welcome-elsewhere"
          alt="Welcome to Elsewhere sign in initial spawn room of server."
          title="Welcome to Elsewhere sign"
          src={welcomeImg}
        />
        <p>Here you can find a unique Vintage Story gaming experience.</p>
        <p>You can found a community, or adventure and quest. Become a valued merchant, or a treasure seeker. We have a little bit of everything, and are always experimenting and growing.</p>
        <p>What will you build?</p>
      </main>
    </div>
  )
}
