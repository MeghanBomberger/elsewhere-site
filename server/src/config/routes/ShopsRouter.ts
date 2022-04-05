require('dotenv').config()

import express from 'express'
import Airtable from 'airtable'
import { ShopsAirtableResponse, ShopAPIResponse } from '../types/api-types'

const base = new Airtable({apiKey: process.env?.AIRTABLE_API_KEY || ''}).base(process.env?.AIRTABLE_BASE || '')
const shopsRouter = express.Router()

shopsRouter.get('/', async (req, res, next) => {
  await base('shops').select({
    view: "Grid view"
  }).eachPage(async function page(records, fetchNextPage) {
    //@ts-ignore
    const shops: ShopAPIResponse[] = await records.map((record: ShopsAirtableResponse) => {
      const {
        city_name,
        description,
        images,
        shop_name,
        shop_x_coord,
        shop_y_coord,
        shop_z_coord,
        status,
      } = record.fields
      
      const imageData: string[] = images.map(image => image.thumbnails.full.url)

      return {
        id: record.id,
        city: city_name,
        description,
        images: imageData,
        shopName: shop_name,
        shopCoords: `${shop_x_coord}, ${shop_y_coord}, ${shop_z_coord}`,
        status
      }
    })
    res.send(shops)
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

export default shopsRouter
