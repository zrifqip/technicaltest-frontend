export type Auth = {
    name: string,
    remember_token: string
}
export type AuthResponse = {
    success: boolean,
    data: Auth
    message: string,

}