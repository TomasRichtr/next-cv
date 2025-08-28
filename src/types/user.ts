export interface NewUser {
    email: string;
    password: string;
    confirmPassword: string;
    role?: UserRole;
}

export enum UserRole {
    Admin = "admin",
    User = "user",
}

export interface User {
    id: string;
    email: string;
    password: string;
    role: UserRole;
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
