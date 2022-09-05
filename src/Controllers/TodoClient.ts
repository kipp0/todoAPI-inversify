import 'reflect-metadata'
import axios, {AxiosResponse, AxiosError} from 'axios'
import { injectable } from 'inversify'

import { TodoType, TodoClientInterface } from "../types/Data/TodoData"
import { TodoResponseType } from "../types/responses"

@injectable()
export default class TodoClient implements TodoClientInterface {

    fetchData(id?: string): Promise<TodoResponseType> {
        const _API_URL: string = `https://jsonplaceholder.typicode.com/todos${id? `/${id}` : ''}`

        return axios(`${_API_URL}`)
            .then((res: AxiosResponse<TodoType[]>) => {
                return {
                    status: res.status,
                    data: res.data,
                    errors: []
                }
            })
            .catch((err: AxiosError) => {
                const data: TodoType[] = [err.response?.data as TodoType]

                if (err.response) {
                    
                    return {
                        status: err.response.status,
                        data,
                        errors: [`Error: (${err.response.status}) something went wrong when accessing route`]
                    }
                }
                if (err.request) {
                    return {
                        status: 400,
                        data,
                        errors: [err.request]
                    }
                }
                return {
                    status: 400,
                    data,
                    errors: [err.toString()]
                }
            })
    }
}