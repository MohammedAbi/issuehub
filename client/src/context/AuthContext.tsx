import { createContext, useState, useContext } from "react";

type AuthType = {
  token: string | null;
  setToken: (token: string | null) => void;
};

const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token"),
  );

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
