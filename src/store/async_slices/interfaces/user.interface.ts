export type userState = {
    loading: boolean,
    error: boolean,
    data: userOutput | null
}

export type userOutput = {
    id?: number,
    username?: string,
    email?: string,
    URLImage?: string,
    created_at?: string,

    message?: string | null,
    error?: string

    statusCode?: number
    authorization?: string | null
}

export type userRegister = {
    username?: string,
    email: string,
    password: string,
    URLImage?: string
}