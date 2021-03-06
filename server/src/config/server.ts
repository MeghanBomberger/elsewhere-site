require('dotenv').config()

import cors from 'cors'
import express from 'express'
import path from 'path'
import serveStatic from 'serve-static'

import citiesRouter from './routes/CitiesRouter'
import modsRouter from './routes/ModsRouter'
import rolesRouter from './routes/RolesRouter'
import newsRouter from './routes/NewsRouter'
import shopsRouter from './routes/ShopsRouter'
import contactRouter from './routes/ContactRouter'
import rulesRouter from './routes/RulesRouter'
import supportersRouter from './routes/SupportersRouter'

const app = express()

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: process.env.LIVE_URL || process.env.HEROKU_URL || 'http://localhost:3000',
  preflightContinue: false
}

app.use(express.json())
app.use(cors(options))
app.use(serveStatic(__dirname + '/client/build'))

app.get("/", (req, res) => {
  res.send({message: "Hi"})
})

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello World!" })
})

app.use('/api/roles', rolesRouter)
app.use('/api/mods', modsRouter)
app.use('/api/shops', shopsRouter)
app.use('/api/cities', citiesRouter)
app.use('/api/news', newsRouter)
app.use('/api/contactus', contactRouter)
app.use('/api/rules', rulesRouter)
app.use('/api/supporters', supportersRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  });
}

app.listen(
  process.env.PORT || 3000,
  () => console.log(`Server listening on port ${process.env.PORT || 3000}`)
)
