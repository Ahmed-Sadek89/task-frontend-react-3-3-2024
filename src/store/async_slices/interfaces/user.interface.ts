export type userState = {
    loading: boolean,
    error: boolean,
    data: userOutput| null
}

export type userOutput = {
    id: number,
    username: string,
    email: string,
    URLImage: string,
    created_at: string,
}

export type userRegister = {
    username: string,
    email: string,
    password: string,
    URLImage?: string
}