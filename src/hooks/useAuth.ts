import { getFromStorage, setToStorage } from '../services/api';

interface AuthUser {
  username: string;
  email: string;
}

export const useAuth = () => {
  const register = (username: string, email: string, password: string): void => {
    const user: AuthUser = { username, email };
    setToStorage('authUser', user);
    setToStorage('authPassword', password);
  };

  const getUser = (): AuthUser | null => {
    return getFromStorage<AuthUser>('authUser');
  };

  const logout = (): void => {
    localStorage.removeItem('authUser');
    localStorage.removeItem('authPassword');
  };

  return { register, getUser, logout };
};
