import {describe, expect, test, beforeEach} from '@jest/globals';
import APIManager from '../Controllers/APIManager';
import TodoClient from '../Controllers/TodoClient';
import helper from '../helper'
import TodoModule from '../Modules/TodoModule';


describe('APIManager', () => {

    let manager: APIManager,
        todoClient: TodoClient

    beforeEach(() => {
        todoClient = new TodoClient()
        manager = new APIManager(todoClient)
    })

    test('api manager init', () => {
        expect(manager).toBeDefined()
    })
    
    test('todoClient injection', () => {
        const container = helper.containerModuleLoader(TodoModule)
        const todoClient = container.get(TodoClient)
        expect(todoClient).toBeInstanceOf(TodoClient)
    })
})