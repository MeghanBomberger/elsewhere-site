require('dotenv').config()

import express from 'express'
import Airtable from 'airtable'

import {
  CitiesAirtableResponse,
  CitiesAPIResponse,
  CityShop,
  CityShops
} from '../types'

const base = new Airtable({apiKey: process.env?.AIRTABLE_API_KEY || ''}).base(process.env?.AIRTABLE_BASE || '')
const citiesRouter = express.Router()

citiesRouter.get("/", async (req, res, next) => {
  await base("cities").select({
    view: "Grid view"
  }).eachPage(async function page(records, fetchNextPage) {
    //@ts-ignore
    const cities: CitiesAPIResponse[] = await records.map((record: CitiesAirtableResponse) => {
      const {
        city_name,
        description,
        screenshots,
        teleport_x_coords,
        teleport_y_coords,
        teleport_z_coords,
        zone_type,
        shops,
        open_shop_names,
        shop_statuses,
      } = record.fields

      const imageData: string[] = screenshots.map(image => image.thumbnails.full.url)

      const shopsData: CityShop[] = open_shop_names.map((shop: string, index: number) => {
        return {
          id: shops[index],
          name: shop
        }
      })

      const availableShops = shop_statuses?.filter(status => status === 'Available').length

      return {
        id: record.id,
        name: city_name,
        description,
        images: imageData,
        cityCoords: `${teleport_x_coords}, ${teleport_y_coords}, ${teleport_z_coords}`,
        zoneType: zone_type,
        shops: {
          availableShopSpaces: availableShops,
          openShops: shopsData
        },
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

export default citiesRouter
