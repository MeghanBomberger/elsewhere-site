require('dotenv').config()

import express from 'express'
import Airtable from 'airtable'

const base = new Airtable({apiKey: process.env?.AIRTABLE_API_KEY || ''}).base(process.env?.AIRTABLE_BASE || '')
const contactRouter = express.Router()

contactRouter.post('/', async (req, res, next) => {
  try {
    await base('contact_us').create([
      {
        'fields': {
          'name': req.body.name,
          'email': req.body.email,
          'subject': req.body.subject,
          'message': req.body.message
        }
      }
    ])
    res.send({
      success: true
    })
  } catch (err) {
    if (err) {
      console.error(err)
    }
    res.send({
      success: false
    })
  }
})

export default contactRouter
