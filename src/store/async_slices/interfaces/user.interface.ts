export type userState = {
    loading: boolean,
    error: boolean,
    data: userOutput | null
}

type userOutputRegisteration = {
    id?: number,
    username?: string,
    email?: string,
    URLImage?: string,
    created_at?: string,
}
export type userOutput = userOutputRegisteration & {
    status?: string
    message?: string | null,
    error?: string,
    authorization?: string | null
}

export type userRegister = {
    username?: string,
    email: string,
    password: string,
    URLImage?: string
}
