export interface TodoClientInterface {
    fetchData: () => void
}

export type TodoType = {
    userId:    number;
    id:        number;
    title:     string;
    completed: boolean;
}
