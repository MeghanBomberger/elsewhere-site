import React from 'react'

import { Header } from '../components'
import './Join.scss'
//@ts-ignore
import vintageStoryLogo from '../assets/vslogo.png'
//@ts-ignore
import discordLogo from '../assets/discord.png'
//@ts-ignore
import setupShot from '../assets/serversetup.png'

export const Join = () => {
  return (
    <div className="page join">
      <Header/>
      <main className="main">
        <h2>How to Join the Server</h2>

        <h3>1) Get the Game</h3>
        <a
          className="step-link"
          target="_blank"
          rel='noreferrer'
          title="Vintage Story Home Page"
          href="https://www.vintagestory.at/"
        >
          <img
            className="step-img"
            alt="vintage story"
            title="vintage story"
            src={vintageStoryLogo}
          />
        </a>
        <p>If you haven't already, download the game and sign-up for a Vintage Story account.</p>

        <h3>2) Join our Discord</h3>
        <a
          className="step-link discord-link"
          href="https://discord.gg/ePtWKHvuWY"
          target="_blank"
          rel='noreferrer'
          title="Elsewhere Discord Server"
        >
          <img
            className="step-img"
            alt="Elsewhere Discord Server"
            title="Elsewhere Discord Server"
            src={discordLogo}
          />
        </a>
        <p>Apon joining introduce yourself with your Vintage Story username so that we can give you in game player permissions. You will be vistor status and unable to interact until you do this step.</p>

        <h3>3) Log on!</h3>
        <img
          className="setup-img"
          alt="Server Setup"
          title="Server Setup"
          src={setupShot}
        />
        <p>Head to the Multiplayer section of your game. In the bottom right corner click the "New Server". The server name is "Elsewhere" and the host is "elsewhere.g.akliz.net:49438".</p>

        <p>If you are still set to vistor when you log in, please ping one of the Admins on Discord to get this corrected for you.</p>

        <p>Checkout the <b>Getting Started</b> portion of our rules for more info.</p>
      </main>
    </div>
  )
}
