require('dotenv').config()

import express from 'express'
import Airtable from 'airtable'

import {
  SupporterAPIResponse,
  SupporterAirtableResponse,
} from '../types'
import {
  getImageUrls
} from '../helpers'

const base = new Airtable({apiKey: process.env?.AIRTABLE_API_KEY || ''}).base(process.env?.AIRTABLE_BASE || '')
const supportersRouter = express.Router()

supportersRouter.get("/", async (req, res, next) => {
  await base('supporters').select({
    view: "Grid view"
  }).eachPage(async function page(records, fetchNextPage) {
    //@ts-ignore
    const supporters = await records?.map((record: SupporterAirtableResponse) => {
      const {
        username,
        role,
        role_image,
        role_title
      } = record.fields

      const imageData: string[] = getImageUrls(role_image)
      
      const roles = role?.map((roleId, i) => {
        return {
          id: roleId,
          title: role_title[i],
          image: imageData[i]
        }
      }) || []

      const supporterData: SupporterAPIResponse = {
        id: record.id,
        username,
        roles
      }

      return supporterData
    }) || []
    
    res.send(supporters)
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

export default supportersRouter
