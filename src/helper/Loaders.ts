import {Container, ContainerModule} from 'inversify'

export type ConType<T> =  new () => T

export function containerModuleLoader(...modules: ConType<ContainerModule>[]) {
    const container = new Container()

    container.load(...modules.map( (m: ConType<ContainerModule>) => new m() ) )

    return container
}