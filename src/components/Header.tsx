import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center" role="banner">
      <h1 className="text-xl font-bold">
        <Link to="/" aria-label="Home">Digital Literacy Platform</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          {user ? (
            <>
              <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
              <li><button onClick={logout} className="hover:underline">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/register" className="hover:underline">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;