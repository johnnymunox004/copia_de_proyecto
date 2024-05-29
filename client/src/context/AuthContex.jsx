import { createContext, useState, useContext, useEffect } from "react";
import {
  registerrecuest,
  loginrecuest,
  verityTokenRequest,
} from "../api/aauth.js";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("nose que dice euseAuth must be used within an AuthProvider");
  }
  return context;
};
export const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAtuthenticated, setIAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signup = async (user) => {
    try {
      const res = await registerrecuest(user);
      console.log(res.data);
      setUser(res.data);
      setIAuthenticated(true);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };
  const signin = async (user) => {
    try {
      const res = await loginrecuest(user);
      console.log(res);
      setIAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
      console.log(error.response.data);
    }
  };

  const logout = () =>{
    Cookies.remove('token');
    setIAuthenticated(false);
    setUser(null);
  }

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
      console.log(cookies);

      if (!cookies.token) {
        setIAuthenticated(false);
        setLoading(false);
        return setUser(null);
      }
      try {
        const res = await verityTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) {
          setIAuthenticated(false);
          setLoading(false);
          setLoading(false);

          return
        }

        setIAuthenticated(true);
        setUser(res.data);
        setLoading(false);

      } catch (error) {
        setIAuthenticated(false);
        setUser(null);
        setLoading(false);

      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signup, signin,logout,loading, user, isAtuthenticated, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
