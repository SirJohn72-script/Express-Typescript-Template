import express, { Request, Response } from 'express'
import morgan from 'morgan'

class Server {

  public app: express.Application
  public port: number

  constructor() {
    this.app = express()
    this.port = 3000
    this.config()
    this.routes()
  }

  public getPort(): number {
    return this.port;
  }

  private config(): void {
    this.app.set('port', this.port)

    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    this.app.use(morgan('dev'))
  }

  private routes(): void {
    this.app.get('/', (_req: Request, res: Response) => {
      res.status(200).send('Hello World')
    })
  }
}

export { Server }