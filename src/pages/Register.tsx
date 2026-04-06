import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    register(username, email, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100" role="main">
      <form onSubmit={handleSubmit} className="bg-slate-900/90 p-8 rounded-[1.5rem] shadow-2xl shadow-slate-950/40 w-full max-w-md border border-white/10">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-slate-300">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-slate-700 rounded-md bg-slate-950 text-slate-100 shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-slate-700 rounded-md bg-slate-950 text-slate-100 shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-slate-300">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-slate-700 rounded-md bg-slate-950 text-slate-100 shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 text-slate-950 py-2 px-4 rounded-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;