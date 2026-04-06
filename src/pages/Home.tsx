import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen p-6 lg:p-10">
      <section className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-8 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.75)] lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
              Simple lessons for every learner
            </div>
            <div className="space-y-4">
              <h1 className="section-title text-white">Learn digital skills in a calm, modern space.</h1>
              <p className="max-w-2xl text-slate-300 leading-relaxed text-lg">
                Short lessons, clear examples, and smart visuals help you feel confident using computers and the internet.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/dashboard" className="primary-btn">
                Explore Lessons
              </Link>
              <Link to="/typing" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Try Typing Practice
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-xl">
            <div className="space-y-6">
              <div className="rounded-[1.5rem] bg-slate-950/90 p-6 border border-white/10 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">What you get</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Modern learning with real visuals</h2>
              </div>
              <div className="grid gap-4">
                <div className="rounded-[1.5rem] bg-slate-950/90 p-5 border border-white/10">
                  <p className="font-semibold text-white">Clean design</p>
                  <p className="mt-2 text-sm text-slate-400">Soft contrast, clear layout, and calm text for easy reading.</p>
                </div>
                <div className="rounded-[1.5rem] bg-slate-950/90 p-5 border border-white/10">
                  <p className="font-semibold text-white">Simple lessons</p>
                  <p className="mt-2 text-sm text-slate-400">Short explanations with images and clear points.</p>
                </div>
                <div className="rounded-[1.5rem] bg-slate-950/90 p-5 border border-white/10">
                  <p className="font-semibold text-white">Helpful practice</p>
                  <p className="mt-2 text-sm text-slate-400">Quizzes, homework, and typing support every step.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;