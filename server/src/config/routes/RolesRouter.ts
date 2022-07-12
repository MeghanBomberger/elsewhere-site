require('dotenv').config()

import express from 'express'
import Airtable from 'airtable'

import {
  RoleAPIResponse,
  RoleAirtableResponse,
} from '../types'
import {
  getImageUrls
} from '../helpers'

const base = new Airtable({apiKey: process.env?.AIRTABLE_API_KEY || ''}).base(process.env?.AIRTABLE_BASE || '')
const rolesRouter = express.Router()

rolesRouter.get("/", async (req, res, next) => {
  await base('roles').select({
    view: "Grid view"
  }).eachPage(async function page(records, fetchNextPage) {
    //@ts-ignore
    const roles = await records?.map((record: RoleAirtableResponse) => {
      const {
        image,
        available,
        price,
        title,
        perks,
        venue
      } = record.fields

      const imageData: string[] = getImageUrls(image)
      const roleData: RoleAPIResponse = {
        id: record.id,
        image: imageData[0],
        available,
        price,
        perks,
        title,
        venue
      }

      return roleData
    }) || []
    
    res.send(roles)
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

export default rolesRouter
