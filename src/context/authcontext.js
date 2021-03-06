import React, { createContext, useContext, useState, useEffect } from "react";

import firebase from "../services/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();
const auth = getAuth();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({children}) {

  const [user, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async() => {
      onAuthStateChanged(auth, (user) => {
        setAuthUser(user);
        setLoading(false)
        
        console.log ('user: ', user ? user.uid : 'xxxx')
      });
    }
    fetchData();
  }, []);

  const value = {
    user
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}