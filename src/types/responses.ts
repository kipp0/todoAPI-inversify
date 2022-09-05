import { TodoType } from "./Data/TodoData"

export type TodoResponseType = {
    status: number,
    data: TodoType[],
    errors: string[] | never[]
}