import { AuthContextProps } from "@/types/AuthContext";
import { createContext } from "react";

const AuthContext = createContext<AuthContextProps | null>(null);

export default AuthContext;