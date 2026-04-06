import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full max-w-[300px] flex-shrink-0 rounded-[2rem] border border-white/10 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/35 ring-1 ring-white/5 xl:w-72" role="complementary">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Learning path</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Quick Access</h2>
      </div>
      <nav>
        <ul className="space-y-3 text-sm leading-6 text-slate-300">
          <li>
            <Link to="/dashboard" className="block rounded-[1.75rem] border border-white/10 bg-slate-900/80 px-5 py-3 text-sm transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70">
              Dashboard Overview
            </Link>
          </li>
          <li>
            <Link to="/lessons" className="block rounded-[1.75rem] border border-white/10 bg-slate-900/80 px-5 py-3 text-sm transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70">
              Lessons Library
            </Link>
          </li>
          <li>
            <Link to="/quiz" className="block rounded-[1.75rem] border border-white/10 bg-slate-900/80 px-5 py-3 text-sm transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70">
              Quizzes
            </Link>
          </li>
          <li>
            <Link to="/typing" className="block rounded-[1.75rem] border border-white/10 bg-slate-900/80 px-5 py-3 text-sm transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70">
              Typing Practice
            </Link>
          </li>
          <li>
            <Link to="/progress" className="block rounded-[1.75rem] border border-white/10 bg-slate-900/80 px-5 py-3 text-sm transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70">
              Progress Tracker
            </Link>
          </li>
          <li>
            <Link to="/teacher" className="block rounded-[1.75rem] border border-white/10 bg-slate-900/80 px-5 py-3 text-sm transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70">
              Teacher Review
            </Link>
          </li>
          <li>
            <Link to="/help" className="block rounded-[1.75rem] border border-white/10 bg-slate-900/80 px-5 py-3 text-sm transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70">
              Help Center
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;