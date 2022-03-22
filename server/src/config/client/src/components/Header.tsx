import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ElsewhereLogo } from '../assets'
import { 
  CitiesIcon,
  ClaimsIcon,
  ContactIcon,
  DiscordIcon,
  JoinIcon,
  ModsIcon,
  NewsIcon,
  PatreonIcon,
  RolesIcon,
  RulesIcon,
  ShopsIcon, 
  TwitchIcon,
} from '../assets'

const activityNavIcons = [
  {
    icon: <JoinIcon className="nav-icon"/>,
    path: "/join",
    title: "Join",
  },
  {
    icon: <NewsIcon className="nav-icon"/>,
    path: "/news",
    title: "News",
  },
]

const infoNavIcons = [
  {
    icon: <CitiesIcon className="nav-icon"/>,
    path: "/cities",
    title: "Cities",
  },
  {
    icon: <ShopsIcon className="nav-icon"/>,
    path: "/shops",
    title: "Shops",
  },
  {
    icon: <RolesIcon className="nav-icon"/>,
    path: "/roles",
    title: "Roles"
  },
  {
    icon: <ClaimsIcon className="nav-icon"/>,
    path: "/claims",
    title: "Claims",
  },
  {
    icon: <ModsIcon className="nav-icon"/>,
    path: "/mods",
    title: "Mods",
  },
  {
    icon: <RulesIcon className="nav-icon"/>,
    path: "/rules",
    title: "Rules"
  },
]

const connectIcons = [
  {
    icon: <PatreonIcon className="nav-icon"/>,
    path: "/patreon",
    title: "Patreon"
  },
  {
    icon: <DiscordIcon className="nav-icon"/>,
    path: "/discord",
    title: "Discord"
  },
  {
    icon: <TwitchIcon className="nav-icon"/>,
    path: "/twitch",
    title: "Twitch"
  },
  {
    icon: <ContactIcon className="nav-icon"/>,
    path: "/contact",
    title: "Contact Us"
  },
]


export const Header = () => {
  return (
    <header className="header">

      <nav className="hotbar">

        <ElsewhereLogo className="header-logo"/>

        <h1 className="logo-text">Elsewhere</h1>

        {activityNavIcons.map(button => (
          <Link 
            className="hotbar-button"
            to={button.path}
            title={button.title}
          >
            {button.icon}
            <p className="icon-tooltip">{button.title}</p>
          </Link>
        ))}

        <div className="nav-spacer"/>

        {infoNavIcons.map(button => (
          <Link 
            className="hotbar-button"
            to={button.path}
            title={button.title}
          >
            {button.icon}
            <p className="icon-tooltip">{button.title}</p>
          </Link>
        ))}

        <div className="nav-spacer"/>

        {connectIcons.map(button => (
          <Link 
            className="hotbar-button"
            to={button.path}
            title={button.title}
          >
            {button.icon}
            <p className="icon-tooltip">{button.title}</p>
          </Link>
        ))}
      </nav>

    </header>
  )
}
