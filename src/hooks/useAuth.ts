import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { login, logout, register } from '../store/slices/userSlice';
import { useAppDispatch } from '../store/store';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.user.currentUser);

  const handleLogin = (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  const handleRegister = (username: string, email: string, password: string) => {
    dispatch(register({ username, email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return { user, login: handleLogin, register: handleRegister, logout: handleLogout };
};