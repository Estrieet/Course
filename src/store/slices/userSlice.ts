import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, login, register, getCurrentUser, logout } from '../../services/authService';

interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  currentUser: getCurrentUser(),
  isAuthenticated: !!getCurrentUser(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    registerSuccess: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
  },
});

export const { loginSuccess, logoutSuccess, registerSuccess } = userSlice.actions;

export const login = ({ email, password }: { email: string; password: string }) => (dispatch: any) => {
  const user = login(email, password);
  if (user) {
    localStorage.setItem('currentUserId', user.id);
    dispatch(loginSuccess(user));
  }
};

export const register = ({ username, email, password }: { username: string; email: string; password: string }) => (dispatch: any) => {
  const user = register(username, email, password);
  if (user) {
    localStorage.setItem('currentUserId', user.id);
    dispatch(registerSuccess(user));
  }
};

export const logout = () => (dispatch: any) => {
  logout();
  dispatch(logoutSuccess());
};

export default userSlice.reducer;