import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HelpButton from './components/HelpButton';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Lesson from './pages/Lesson';
import Typing from './pages/Typing';
import Quiz from './pages/Quiz';
import Progress from './pages/Progress';
import Help from './pages/Help';
import Login from './pages/Login';
import Register from './pages/Register';
import { useAuth } from './hooks/useAuth';

const AppContent: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        {user && <Sidebar />}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/lesson/:id" element={user ? <Lesson /> : <Navigate to="/login" />} />
            <Route path="/typing" element={user ? <Typing /> : <Navigate to="/login" />} />
            <Route path="/quiz/:id" element={user ? <Quiz /> : <Navigate to="/login" />} />
            <Route path="/progress" element={user ? <Progress /> : <Navigate to="/login" />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
      </div>
      <HelpButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

export default App;