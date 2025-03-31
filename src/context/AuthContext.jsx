import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; 

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // ✅ 

  const login = (email, password) => {
    
    setUser({ email });
    navigate("/home"); // ✅ 
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
