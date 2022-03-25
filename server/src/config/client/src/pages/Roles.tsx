import React, { 
  useCallback,
  useEffect,
  useState, 
} from 'react'
import axios from 'axios'

import { RolesAPIResponse } from '../../../types/api-types'
import './Roles.scss'
import { Header } from '../components'
import { baseURL } from '../helpers/axios-helpers'

export const Roles = () => {
  const [patreonRoles, setPatreonRoles] = useState<RolesAPIResponse[]>([])
  const [discordRoles, setDiscordRoles] = useState<RolesAPIResponse[]>([])

  const createRoleCard = (rolesList: RolesAPIResponse[]) => {
    return rolesList.map(role => (
      <article
        key={role.id}
        className="role-card"
      >
        <h3 className="role-title">{role.title}</h3>
        <img
          className="role-img"
          alt={`${role.venue} Role: ${role.title}`}
          title={`${role.venue} Role: ${role.title}`}
          src={role.image}
        />
        {role?.price && <p className="role-price">${role.price}</p>}
        <ul className="role-perks-list">
          {role.perks.map(perk => (
            <li
              key={`${role.title}-${perk}-perk`}
            >
              {perk}
            </li>
          ))}
        </ul>
      </article>
    ))
  }
  
  const fetchRolesData = async () => {
    await axios.get(`${baseURL}/api/roles`)
      .then(res => {
        if (res.data.roles) {
          const { roles } = res.data
          console.log(roles)
          const patreonRoleData = roles.filter((role: RolesAPIResponse) => role.venue === 'Patreon')
          const discordRolesData = roles.filter((role: RolesAPIResponse) => role.venue === 'Discord')
          setPatreonRoles(patreonRoleData)
          setDiscordRoles(discordRolesData)
        }
      })
  }

  useEffect(() => {
    fetchRolesData()
  }, [])
  
  return (
    <div className="page roles">
      <Header/>
      <main className="main roles-main">
        <h2>Patreon Tiers</h2>
        {createRoleCard(patreonRoles)}
        <h2>Discord Boosting Perks</h2>
        {createRoleCard(discordRoles)}
      </main>
    </div>
  )
}
