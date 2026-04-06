import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center" role="main">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Digital Literacy Platform</h1>
        <p className="text-lg mb-8">Learn essential digital skills through interactive lessons and practice.</p>
        <div className="space-x-4">
          <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Get Started
          </Link>
          <Link to="/login" className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;