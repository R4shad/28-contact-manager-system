import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { Contact } from './models/Contact.model'

import { contactRoutes } from './routes/contact.routes'

export class App {
  app: express.Application
  port: string

  constructor() {
    this.app = express()
    this.port = process.env.PORT || '3000'
    //Middlewares
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(morgan('dev'))

    this.startServer()
    this.conectDatabase()
    this.routes()
  }

  private startServer() {
    console.log(process.env.DB_USER)
    console.log(process.env.DB_PASS)
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}/api`)
    })
  }

  private async conectDatabase() {
    try {
      await Contact.sync()
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }

  private routes() {
    this.app.use('/api/contacts', contactRoutes)
  }
}
