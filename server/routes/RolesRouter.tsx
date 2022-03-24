import express from 'express'
import Airtable from 'airtable'

const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY || ''}).base(process.env.AIRTABLE_BASE)
const rolesRouter = express.Router()

rolesRouter.get("/", async (req, res, next) => {
  try {
    await base('roles')
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        const roles = records.map(role => {
          const {
            role_id,
            
          }
          return {
            roleId: 
          }
        })
      })
  }
})