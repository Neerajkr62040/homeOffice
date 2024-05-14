import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
    sessionStorage.setItem("user", JSON.stringify(user))
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    if (user) setUser(user);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};