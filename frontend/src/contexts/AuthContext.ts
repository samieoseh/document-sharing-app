import { AuthContextProps } from "@/types/AuthContext";
import { createContext } from "react";

const AuthContext = createContext<AuthContextProps>({
    user: null,
    isAuthenticated: false,
    token: null,
    waitIsAuthCheck: true,
    login: () => {},
    logout: () => { },
    signup: () => { },
});

export default AuthContext;