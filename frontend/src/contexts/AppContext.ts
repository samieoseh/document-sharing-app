import { AppContextProps } from "@/types/AppContext";
import { createContext } from "react";

const AppContext = createContext<AppContextProps | null>(null);

export default AppContext;
