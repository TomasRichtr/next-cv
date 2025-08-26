export interface NewUser {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface User {
    id: string;
    email: string;
    password: string;
}

export enum LoginMode {
    Login = "login",
    Signup = "signup",
}

export enum FormFields {
    Email = "email",
    Password = "password",
    ConfirmPassword = "confirmPassword",
}
