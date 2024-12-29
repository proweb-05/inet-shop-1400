export interface IRegister {
    email: string,
    password: string,
    password2: string,
    username: string
}

export interface ILogin {
    password: string,
    username: string
}