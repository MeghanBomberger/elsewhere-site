require('dotenv').config()

import express from 'express'
import Airtable, {
  Records
} from 'airtable'
import axios from 'axios'

const base = new Airtable({apiKey: process.env?.AIRTABLE_API_KEY || ''}).base(process.env?.AIRTABLE_BASE || '')
const modsRouter = express.Router()

interface ModDBData {
  modDBID: string,
  name: string,
  lastUpdated: string,
  currentVersion: string,
  tags: string[],
  assetid: string
}

interface ModAirtableFields {
  id: string;
  fields: {
    mod_name?: string;
    version_number_in_use?: string;
    mod_db_id?: string;
    mod_db_version_number?: string;
    mod_db_tags?: string[];
    description?: string;
    images?: any[]; //update to correct type
    mod_db_url?: string;
    mod_db_version_release_date?: string;
    status?: string;
  }
}

modsRouter.get("/syncvsmoddb", async (req, res, next) => {
  await base('mods').select({
    view: "Grid view"
  }).eachPage(async function page(records, fetchNextPage) {
    //@ts-ignore
    const mods = await records.map(record => ({ id: record.id, fields: {...record.fields} }))

    await mods.forEach(async (mod: ModAirtableFields, index) => {
      let shouldUpdate = false
      let newModData: ModAirtableFields = {id: mod.id, fields: {}}
      const modDBData: ModDBData = await axios.get(`http://mods.vintagestory.at/api/mod/${mod.fields.mod_db_id}`)
      .then(res => {
        const modData = res.data.mod
        return {
          modDBID: modData?.modid || '',
          name: modData?.name || '',
          lastUpdated: modData?.lastmodified || '',
          currentVersion: modData?.releases[0].modversion || '',
          tags: modData?.tags || '',
          assetid: modData?.assetid || ''
        }
      })

      if (modDBData.currentVersion !== mod.fields.mod_db_version_number) {
        if (shouldUpdate === false) {
          shouldUpdate = true
        }
        newModData.fields.mod_db_version_number = modDBData.currentVersion
        newModData.fields.status = "pending"
      }

      if (mod.fields.version_number_in_use === modDBData.currentVersion && mod.fields.status !== "current") {
        if (shouldUpdate === false) {
          shouldUpdate = true
        }
        newModData.fields.status = "current"
      }

      if (mod?.fields?.mod_name !== modDBData.name) {
        if (shouldUpdate === false) {
          shouldUpdate = true
        }
        newModData.fields.mod_name = modDBData.name
      }

      if (mod.fields.mod_db_url !== `https://mods.vintagestory.at/show/mod/${modDBData.assetid}`) {
        if (shouldUpdate === false) {
          shouldUpdate = true
        }
        newModData.fields.mod_db_url = `https://mods.vintagestory.at/show/mod/${modDBData.assetid}`
      }

      if (JSON.stringify(mod?.fields?.mod_db_tags) !== JSON.stringify(modDBData.tags)) {
        if (shouldUpdate === false) {
          shouldUpdate = true
        }
        newModData = {
          ...newModData,
          fields: {
            ...newModData.fields,
            mod_db_tags: [...modDBData.tags]
          }
        }
      }

      if (shouldUpdate === true) {
        //@ts-ignore
        await base('mods').update([newModData], (err, records) => {
          if (err) {
            console.error(err)
          }
        })
      }

      if (index === mods.length - 1) {
        res.send({
          success: true
        })
      }
    })

  }).catch((err) => {
    if (err) {
      console.error(err)
    }
    res.send({
      success: false
    })
  }).finally(() => {
    next()
  })
})

modsRouter.get("/", async (req, res, next) => {
  await base('mods').select({
    view: "Grid view"
  }).eachPage(async function page(records, fetchNextPage) {
    const mods = await records.map(record => ({ id: record.id, fields: {...record.fields} }))
    res.send({
      success: true,
      mods: mods
    })
  }).catch((err) => {
    if (err) {
      console.error(err)
    }
    res.send({
      success: false
    })
  }).finally(() => {
    next()
  })
})

export default modsRouter
