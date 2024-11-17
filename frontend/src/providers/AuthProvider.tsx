import { loginUser } from "@/api/auth-api";
import AuthContext from "@/contexts/AuthContext";
import { User } from "@/types/User";
import { useState } from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [waitIsAuthCheck, setWaitIsAuthCheck] = useState(true);

  const login = async (userData: User) => {
    const userResponse = await loginUser(userData.username, userData.password);

    if (userResponse.accessToken) {
      // Set the user, isAuthenticated, and token state
      setUser(userResponse.user);
      setIsAuthenticated(true);
      setToken(userResponse.accessToken);
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setToken(null);
  };

  const signup = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
    setToken("1234");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        token,
        setToken,
        waitIsAuthCheck,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
