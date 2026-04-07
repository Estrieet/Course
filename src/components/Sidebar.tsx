import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full max-w-[300px] flex-shrink-0 xl:w-72" role="complementary">
      <div className="modern-card p-6 mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">Navigation</p>
        <h2 className="mt-3 text-2xl font-bold text-white">Quick Access</h2>
      </div>
      
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="block rounded-lg border border-white/10 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:bg-blue-500/10 hover:border-blue-400/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
            >
              Dashboard Overview
            </Link>
          </li>
          <li>
            <Link
              to="/lessons"
              className="block rounded-lg border border-white/10 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:bg-blue-500/10 hover:border-blue-400/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
            >
              Lessons Library
            </Link>
          </li>
          <li>
            <Link
              to="/quiz"
              className="block rounded-lg border border-white/10 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:bg-blue-500/10 hover:border-blue-400/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
            >
              Quizzes
            </Link>
          </li>
          <li>
            <Link
              to="/typing"
              className="block rounded-lg border border-white/10 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:bg-blue-500/10 hover:border-blue-400/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
            >
              Typing Practice
            </Link>
          </li>
          <li>
            <Link
              to="/progress"
              className="block rounded-lg border border-white/10 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:bg-blue-500/10 hover:border-blue-400/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
            >
              Progress Tracker
            </Link>
          </li>
          <li>
            <Link
              to="/teacher"
              className="block rounded-lg border border-white/10 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:bg-blue-500/10 hover:border-blue-400/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
            >
              Teacher Review
            </Link>
          </li>
          <li>
            <Link
              to="/ai-assistant"
              className="block rounded-lg border border-white/10 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:bg-blue-500/10 hover:border-blue-400/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
            >
              🤖 AI Assistant
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              className="block rounded-lg border border-white/10 bg-slate-900/50 px-4 py-3 text-sm font-medium text-slate-300 transition duration-200 hover:bg-blue-500/10 hover:border-blue-400/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70"
            >
              Help Center
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;