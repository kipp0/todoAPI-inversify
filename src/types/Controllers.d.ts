type TodoClientType = {
    fetchData: (url: string) => void
}

type APIManagerPropTypes = {
    todoClient: TodoClient
}