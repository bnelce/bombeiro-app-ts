import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import api from '../services/api';
import { AppLoading } from "expo";

interface User {
    id_user: number,
    full_name: string,
    peace_name: string,
    phone_number: string,    
}
interface PromiseResponse {
  data: {
    user: User,
    token: string
  };
}

interface AuthContextData {
  signed: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): Promise<void>;
  loading: boolean;
  user: User | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signIn(email: string, password: string) {
   // Ver como faz o "catch" caso tenha algum erro no post
    const response: any = await api.post('/sessions', {email,password});
    const response: PromiseResponse = await api.post('/sessions', {email,password});

    const { user } = response.data;
    await AsyncStorage.setItem("@inter-clone:user", JSON.stringify(user));
    setUser(user);
  }

  async function signOut() {
    await AsyncStorage.removeItem("@inter-clone:user");
    setUser(null);
  }

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@inter-clone:user");

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  if (loading) return <AppLoading />;

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
