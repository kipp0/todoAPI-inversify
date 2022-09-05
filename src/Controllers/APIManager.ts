import 'reflect-metadata'
import { controller, httpGet, requestParam, response, request, next } from 'inversify-express-utils'
import {Response, Request, NextFunction} from "express";

import { TodoResponseType } from '../types/responses'
import TodoClient from './TodoClient'

@controller('/todos')
export default class APIManager {
    constructor(private readonly _todoClient: TodoClient) {}

    @httpGet('/')
    async fetchData(@request() _req: Request, @response() _res: Response, @next() _next: NextFunction): Promise<TodoResponseType> {
        return await this._todoClient.fetchData()
    }
    @httpGet('/:id')
    async fetchDataByID(@requestParam('id') id: string, @response() _res: Response): Promise<TodoResponseType> {
        return await this._todoClient.fetchData(id)
    }
}