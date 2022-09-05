import dotenv from 'dotenv'

import "reflect-metadata";
import { InversifyExpressServer } from 'inversify-express-utils'

import { Env } from './types/env'
import TodoModule from './Modules/TodoModule';
import helper from './helper';

dotenv.config()

const env: Env = process.env

async function main(port: string = '5000'): Promise<void> {
    const container = helper.containerModuleLoader(TodoModule)
    const server = new InversifyExpressServer(container)
    const app = server.build()

    try {
        app.listen(port, () => console.log(`server connected post: ${port}`))
    } catch(e) {
        console.log(e)
    }
}

if (!env.SERVER_PORT) console.log('SERVER_PORT not defined in .env');
main(env.SERVER_PORT)

// app.listen(env.SERVER_PORT, () => console.log('running..'))