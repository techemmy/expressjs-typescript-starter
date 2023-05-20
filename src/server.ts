import express, { Express, Request, Response } from 'express'
require('dotenv').config()

const app: Express = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript configured!')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
