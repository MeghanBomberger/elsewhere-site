import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { ModsAPIResponse } from '../../../types/api-types'
import { baseURL } from '../helpers/axios-helpers'
import { Header } from '../components'
import './Mods.scss'

export const Mods = () => {
  const [mods, setMods] = useState<ModsAPIResponse[]>([])
  
  const fetchModsData = async () => {
    await axios.get(`${baseURL}/api/mods`)
    .then(res => {
      if (res.data) {
        const mods = res.data
        setMods(mods)
      }
    })
  }

  useEffect(() => {
    fetchModsData()
  }, [])

  return (
    <div className="page mods">
      <Header/>
      <main className="main">
        <h2>Mods</h2>
        {mods?.map(mod => (
          <article
            key={mod.id}
            className="mod-card"
          >
            <a 
              title={mod.modName}
              href={mod.modDBURL}
              target="_blank"
              rel='noreferrer'
            >
              <h3>{mod.modName}🔗</h3>
              <p className='version-pill'>v {mod.versionNumberInUse}</p>
              <p className="mod-desc">{mod.description}</p>
            </a>
            <div className="tags-container">
              <h4>Mod Type:</h4>
              {mod.modDBTags?.map((tag: string) => (
                <p className="tag-pill">{tag}</p>
              ))}
            </div>
          </article>
        ))}
      </main>
    </div>
  )
}
