import { getFromStorage, setToStorage } from './api';

export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
}

const hashPassword = (password: string): string => {
  // Simple hash for demo purposes - in production, use proper hashing
  return btoa(password);
};

export const register = (username: string, email: string, password: string): User | null => {
  const users = getFromStorage('users') || [];
  const existingUser = users.find((u: User) => u.email === email || u.username === username);
  if (existingUser) return null;

  const user: User = {
    id: Date.now().toString(),
    username,
    email,
    passwordHash: hashPassword(password),
  };
  users.push(user);
  setToStorage('users', users);
  return user;
};

export const login = (email: string, password: string): User | null => {
  const users = getFromStorage('users') || [];
  const user = users.find((u: User) => u.email === email && u.passwordHash === hashPassword(password));
  return user || null;
};

export const getCurrentUser = (): User | null => {
  const userId = getFromStorage('currentUserId');
  if (!userId) return null;
  const users = getFromStorage('users') || [];
  return users.find((u: User) => u.id === userId) || null;
};

export const logout = (): void => {
  localStorage.removeItem('currentUserId');
};