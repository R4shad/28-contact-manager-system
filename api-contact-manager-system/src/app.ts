import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { sequelize } from './database/database'

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
      await sequelize.authenticate()
      console.log('Connection has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }
}
