import React from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { getLessons } from '../services/lessonService';

const QuizList: React.FC = () => {
  const { progress } = useProgress();
  const lessons = getLessons();

  return (
    <div className="p-6" role="main">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Quizzes</h1>
        <p className="mt-3 text-slate-300 max-w-3xl">Complete quizzes for each lesson to unlock the next lesson and improve your score. Only unlocked lessons are available.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {lessons.map((lesson) => {
          const unlocked = progress.unlockedLessons.includes(lesson.id);
          return (
            <div key={lesson.id} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-slate-400/30">
              <div className="relative h-44 overflow-hidden">
                <img src={lesson.image} alt={lesson.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Quiz {lesson.id}</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{lesson.title}</h2>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${unlocked ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300'}`}>
                    {unlocked ? 'Available' : 'Locked'}
                  </span>
                  <Link
                    to={unlocked ? `/quiz/${lesson.id}` : '#'}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${unlocked ? 'bg-white text-slate-950 hover:bg-slate-100' : 'cursor-not-allowed bg-slate-700 text-slate-400'}`}
                  >
                    {unlocked ? 'Take Quiz' : 'Locked'}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizList;
