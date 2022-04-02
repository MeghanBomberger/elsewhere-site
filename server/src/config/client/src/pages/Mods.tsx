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
      if (res.data.mods) {
        const { mods } = res.data
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
              title={mod.fields.mod_name}
              href={mod.fields.mod_db_url}
              target="_blank"
              rel='noreferrer'
            >
              <h3>{mod.fields.mod_name}🔗</h3>
              <p className='version-pill'>v {mod.fields.version_number_in_use}</p>
              <p className="mod-desc">{mod.fields.description}</p>
            </a>
            <div className="tags-container">
              <h4>Mod Type:</h4>
              {mod.fields.mod_db_tags?.map((tag: string) => (
                <p className="tag-pill">{tag}</p>
              ))}
            </div>
          </article>
        ))}
      </main>
    </div>
  )
}
