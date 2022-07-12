require('dotenv').config()

import express from 'express'
import Airtable from 'airtable'
import axios from 'axios'

import { RulesAirtableResponse, RulesAPIResponse } from '../types'
import {
  getImageUrls
} from '../helpers'

const base = new Airtable({apiKey: process.env?.AIRTABLE_API_KEY || ''}).base(process.env?.AIRTABLE_BASE || '')
const rulesRouter = express.Router()

rulesRouter.get('/', async (req, res, next) => {
  await base('rules').select({
    view: "Grid view"
  }).eachPage(async function page(records, fetchNextPage) {
      //@ts-ignore
      const rules: RulesAPIResponse[] = await records?.map((record: RulesAirtableResponse) => {
      const {
        subject,
        contents,
        images,
        category
      } = record.fields

      const imageData: string[] = getImageUrls(images)

      return { 
        id: record.id, 
        subject,
        contents,
        images: imageData,
        category
      }
    }) || []

    res.send(rules)
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

export default rulesRouter
