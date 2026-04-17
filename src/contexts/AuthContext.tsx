import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../lib/axios";

interface User {
  id: string;
  username: string | null;
  email: string;
  avatar: string | null;
  authProvider: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  username: string;
  isLoading: boolean;
  logout: () => void;
  checkAuth: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  username: "",
  isLoading: true,
  logout: () => {},
  checkAuth: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();
  const [sessionValid, setSessionValid] = useState<boolean>(() => localStorage.getItem("auth-session-valid") === "true");

  const { data: user, isLoading, refetch } = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      try {
        const response = await api.get('/auth/me');
        return response.data;
      } catch (error) {
        return null;
      }
    },
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("auth-session-valid", "true");
      setSessionValid(true);
    } else if (!isLoading) {
      localStorage.removeItem("auth-session-valid");
      setSessionValid(false);
    }
  }, [user, isLoading]);

  useEffect(() => {
    const handleUnauthorized = () => {
      localStorage.removeItem("auth-session-valid");
      setSessionValid(false);
      queryClient.setQueryData(['currentUser'], null);
    };

    window.addEventListener('auth:unauthorized', handleUnauthorized);
    return () => window.removeEventListener('auth:unauthorized', handleUnauthorized);
  }, [queryClient]);

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await api.post('/auth/logout');
    },
    onSettled: () => {
      localStorage.removeItem("auth-session-valid");
      setSessionValid(false);
      queryClient.setQueryData(['currentUser'], null);
      window.location.href = '/';
    }
  });

  const logout = () => {
    logoutMutation.mutate();
  };

  const checkAuth = () => {
    refetch();
  };

  const isLoggedIn = !!user || sessionValid;
  const username = user?.username || "";

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, username, isLoading, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
