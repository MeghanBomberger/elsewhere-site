import React, { 
  useEffect,
  useState, 
} from 'react'
import axios from 'axios'

import { RoleAPIResponse } from '../../../types/api-types'
import './Roles.scss'
import { Header } from '../components'
import { baseURL } from '../helpers/axios-helpers'
import { RoleCard } from '../components/RoleCard'

export const Roles = () => {
  const [patreonRoles, setPatreonRoles] = useState<RoleAPIResponse[]>([])
  const [discordRoles, setDiscordRoles] = useState<RoleAPIResponse[]>([])

  
  const fetchRolesData = async () => {
    await axios.get(`${baseURL}/api/roles`)
      .then((res) => {
        if (res.data?.length > 0) {
          const roles = res.data
          const patreonRoleData = roles.filter((role: RoleAPIResponse) => role.venue === 'Patreon')
          const discordRolesData = roles.filter((role: RoleAPIResponse) => role.venue === 'Discord')
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
        {patreonRoles?.map(role => (
          <RoleCard {...role} />
        ))}
        <h2>Discord Boosting Perks</h2>
        {discordRoles?.map(role => (
          <RoleCard {...role} />
        ))}
      </main>
    </div>
  )
}
