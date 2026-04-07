import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 px-4 py-4 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/5 bg-black/90 shadow-lg backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 text-white transition-transform duration-200 hover:scale-105">
          <div className="relative h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
            D
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">Digital</p>
            <p className="text-sm font-semibold leading-none text-white">Literacy</p>
          </div>
        </Link>

        <nav className="flex-1">
          <ul className="flex flex-wrap items-center justify-center gap-1 text-sm">
            <li>
              <Link
                to="/dashboard"
                className="rounded-lg px-3 py-2 font-medium text-slate-300 transition duration-200 hover:bg-white/10 hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/lessons"
                className="rounded-lg px-3 py-2 font-medium text-slate-300 transition duration-200 hover:bg-white/10 hover:text-white"
              >
                Lessons
              </Link>
            </li>
            <li>
              <Link
                to="/quiz"
                className="rounded-lg px-3 py-2 font-medium text-slate-300 transition duration-200 hover:bg-white/10 hover:text-white"
              >
                Quizzes
              </Link>
            </li>
            <li>
              <Link
                to="/typing"
                className="rounded-lg px-3 py-2 font-medium text-slate-300 transition duration-200 hover:bg-white/10 hover:text-white"
              >
                Typing
              </Link>
            </li>
            <li>
              <Link
                to="/progress"
                className="rounded-lg px-3 py-2 font-medium text-slate-300 transition duration-200 hover:bg-white/10 hover:text-white"
              >
                Progress
              </Link>
            </li>
            <li>
              <Link
                to="/teacher"
                className="rounded-lg px-3 py-2 font-medium text-slate-300 transition duration-200 hover:bg-white/10 hover:text-white"
              >
                Teacher
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/ai-assistant"
            className="btn-secondary hidden sm:inline-flex"
          >
            🤖 AI
          </Link>
          <Link
            to="/help"
            className="btn-primary"
          >
            Help
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;