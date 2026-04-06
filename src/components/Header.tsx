import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/95 px-4 py-4 shadow-sm shadow-slate-950/20 backdrop-blur-xl" role="banner">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-900/90 text-lg font-semibold shadow-lg shadow-black/20">
            D
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Digital</p>
            <p className="text-lg font-semibold">Literacy Hub</p>
          </div>
        </Link>

        <nav>
          <ul className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <li><Link to="/dashboard" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">Dashboard</Link></li>
            <li><Link to="/lessons" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">Lessons</Link></li>
            <li><Link to="/quiz" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">Quizzes</Link></li>
            <li><Link to="/typing" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">Typing</Link></li>
            <li><Link to="/progress" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">Progress</Link></li>
            <li><Link to="/teacher" className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white">Teacher</Link></li>
            <li><Link to="/help" className="rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 transition hover:bg-white/10 hover:text-white">Help</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;