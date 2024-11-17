import { User } from "./User";

export interface AuthContextProps {
    user: User | null;
    isAuthenticated: boolean;
    token: string | null;
    setToken: (token: string) => void;
    waitIsAuthCheck: boolean;
    login: (userData: User) => Promise<void>;
    logout: () => void;
    signup: (userData: User) => void;
}