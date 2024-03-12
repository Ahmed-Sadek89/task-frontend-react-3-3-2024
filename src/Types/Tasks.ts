export type Task = {
    id?: number,
    title?: string,
    description?: string,
    category?: string
    status?: string,
    date?: string,
    userId?: number
}

export type TaskError = {
    title: string,
    description: string,
    category: string
}