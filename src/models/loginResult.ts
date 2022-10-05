import { User } from "./user";

export interface LoginResult {
    data: User;
    success: boolean;
    message: string;
}