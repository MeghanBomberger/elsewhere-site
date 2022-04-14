require('dotenv').config()

import express from 'express'
import Airtable from 'airtable'

import {
  NewsAirtableResponse,
  NewsAPIResponse
} from '../types'
import {
  getImageUrls
} from '../helpers'

const base = new Airtable({apiKey: process.env?.AIRTABLE_API_KEY || ''}).base(process.env?.AIRTABLE_BASE || '')
const newsRouter = express.Router()

newsRouter.get('/', async (req, res, next) => {
  await base('news').select({
    view: 'Grid view'
  }).eachPage(async function page(records, fetchNextPage) {
    //@ts-ignore
    const news: NewsAPIResponse[] = await records.map((record: NewsAirtableResponse) => {
      const {
        title,
        contents,
        images,
        publish_date
      } = record.fields

      const imageData: string[] = getImageUrls(images)

      return {
        id: record.id,
        title,
        contents,
        images: imageData,
        publish_date
      }
    })
    res.send(news)
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

export default newsRouter