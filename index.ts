import { INestApplication } from '@nestjs/common'
import * as express from 'express';
import { resolve } from 'path';
import type { Request, Response } from 'express';
interface Service {
  name: string
  url: string
  swaggerVersion: string
  location: string
}
export function knife4jSetup(app: INestApplication | any, services: Service[]) {
  app.use('/', express.static(resolve(__dirname, '../public/')))
  app.use('/swagger-resources', function (req: Request, res: Response) {
    res.send(services)
  })
}