import {describe, expect, test, beforeEach} from '@jest/globals';
import TodoClient from "../Controllers/TodoClient";
import { TodoResponseType } from '../types/responses';
import todoData from './todoData';


describe('TodoClient', () => {
    let todoClient: TodoClientType

    beforeEach(() => {
        todoClient = new TodoClient()
    })

    test('TodoClient defined', () => {
        expect(todoClient).toBeDefined()
    })

    test('TodoClient fetchAll success', () => {
        const todoClient = new TodoClient()
        return todoClient.fetchData().then((res: TodoResponseType) => {
            expect(res.status).toBe(200)
            expect(res.data).toEqual(todoData)
            expect(res.errors).toEqual([])
        })
    })
    test('TodoClient fetch 1 success', () => {
        const todoClient = new TodoClient()
        return todoClient.fetchData('1').then((res: TodoResponseType) => {
            expect(res.status).toBe(200)
            expect(res.data).toEqual({
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
              })
            expect(res.errors).toEqual([])
        })
    })

    test('TodoClient fetch route failure', async () => {
        const todoClient = new TodoClient()
        const res = await todoClient.fetchData('d')
        expect(res.status).toEqual(404)
        expect(res.data[0]).toEqual({})
        expect(res.errors[0]).toBe(`Error: (404) something went wrong when accessing route`)
    })
})