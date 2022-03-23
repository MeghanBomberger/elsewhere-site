import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ElsewhereLogo } from '../assets'
import { 
  CitiesIcon,
  ClaimsIcon,
  ContactIcon,
  DiscordIcon,
  Gear,
  JoinIcon,
  ModsIcon,
  NewsIcon,
  PatreonIcon,
  RolesIcon,
  RulesIcon,
  ShopsIcon, 
  TwitchIcon,
} from '../assets'

interface IconList {
  icon: JSX.Element;
  path: string;
  title: string;
  interior: boolean;
}

const activityNavIcons: IconList[] = [
  {
    icon: <JoinIcon className="nav-icon"/>,
    path: "/join",
    title: "Join",
    interior: true
  },
  {
    icon: <NewsIcon className="nav-icon"/>,
    path: "/news",
    title: "News",
    interior: true
  },
]

const infoNavIcons: IconList[] = [
  {
    icon: <CitiesIcon className="nav-icon"/>,
    path: "/cities",
    title: "Cities",
    interior: true
  },
  {
    icon: <ShopsIcon className="nav-icon"/>,
    path: "/shops",
    title: "Shops",
    interior: true
  },
  {
    icon: <RolesIcon className="nav-icon"/>,
    path: "/roles",
    title: "Roles",
    interior: true
  },
  // {
  //   icon: <ClaimsIcon className="nav-icon"/>,
  //   path: "/claims",
  //   title: "Claims",
  //   interior: true
  // },
  {
    icon: <ModsIcon className="nav-icon"/>,
    path: "/mods",
    title: "Mods",
    interior: true
  },
  {
    icon: <RulesIcon className="nav-icon"/>,
    path: "/rules",
    title: "Rules",
    interior: true
  },
]

const connectIcons: IconList[] = [
  {
    icon: <PatreonIcon className="nav-icon"/>,
    path: "/patreon",
    title: "Patreon",
    interior: false
  },
  {
    icon: <DiscordIcon className="nav-icon"/>,
    path: "/discord",
    title: "Discord",
    interior: false
  },
  {
    icon: <TwitchIcon className="nav-icon"/>,
    path: "/twitch",
    title: "Twitch",
    interior: false
  },
  {
    icon: <ContactIcon className="nav-icon"/>,
    path: "/contact",
    title: "Contact Us",
    interior: true
  },
]


export const Header = () => {
  const createNavSection = (iconList: IconList[]) => (
    <div className="nav-section">
      {iconList?.map(button => {
        if (button.interior) {
          return (
            <Link
              className="nav-button"
              to={button.path}
              title={button.title}
            >
              {button.icon}
              <p className="title-tag">{button.title}</p>
            </Link>
          )
        } else {
          return (
            <a
              className="nav-button"
              href={button.path}
              title={button.title}
            >
              {button.icon}
              <p className="title-tag">{button.title}</p>
            </a>
          )
        }
      })}
    </div>
    )


  return (
    <header className="header">
      <Gear className="gear"/>
      <nav className="hotbar">
        <ElsewhereLogo className="logo"/>
        <h1 className="logo-text">Elsewhere</h1>
        {createNavSection(activityNavIcons)}
        {createNavSection(infoNavIcons)}
        {createNavSection(connectIcons)}
      </nav>
    </header>
  )
}
