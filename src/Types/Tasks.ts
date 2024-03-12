export type Task = {
    id?: number,
    title?: string,
    description?: string,
    category?: 'WORK' | 'PERSONAL' | 'SHOPPING' | 'OTHERS'
    status?: 'PENDING' | 'COMPLETED',
    date?: string,
    userId?: number
}

export type TaskError = {
    title: string,
    description: string,
    category: string
}