export interface User {
    _id?: string;
    username: string;
    password: string;
}

export interface LoginResponse {
    user: User;
    accessToken: string;
}