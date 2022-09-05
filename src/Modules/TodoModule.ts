import { ContainerModule } from 'inversify'
import APIManager from '../Controllers/APIManager'
import TodoClient from '../Controllers/TodoClient'

export default class TodoModule extends ContainerModule {
    constructor() {
        super((bind) => {
            bind(TodoClient).toSelf()
            bind(APIManager).toSelf()
        })
    }
}