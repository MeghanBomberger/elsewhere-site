require('dotenv').config()

import express from 'express'
import Airtable, {
  Records
} from 'airtable'

const base = new Airtable({apiKey: process.env?.AIRTABLE_API_KEY || ''}).base(process.env?.AIRTABLE_BASE || '')
const rolesRouter = express.Router()

rolesRouter.get("/", async (req, res, next) => {
  try {
    await base('roles').select({
      view: "Grid view"
    }).eachPage(async function page(records, fetchNextPage) {
      //@ts-ignore
      const roles = await records.map(record => {
        const {
          role_id,
          image,
          available,
          price,
          title,
          perks,
          venue
        } = record.fields

        const imageData = image as any[]
        const roleData = {
          id: role_id,
          image: imageData[0].thumbnails.full.url,
          available,
          price,
          perks,
          title,
          venue
        }

        return roleData
      })
      res.send({roles: roles})
    })
  } catch (err) {
    if (err) {
      console.error(err)
    }
    res.send({
      success: false
    })
  } finally {
    next()
  }
})

export default rolesRouter
