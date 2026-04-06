import React from 'react';
import { Link } from 'react-router-dom';

interface LessonCardProps {
  id: number;
  title: string;
  image?: string;
  summary?: string;
  completed: boolean;
  unlocked: boolean;
}

const LessonCard: React.FC<LessonCardProps> = ({ id, title, image, summary, completed, unlocked }) => {
  const previewText = summary ?? 'A quick overview of the lesson content.';

  return (
    <div className={`group overflow-hidden rounded-[2rem] border border-white/10 shadow-xl transition duration-300 ${unlocked ? 'bg-slate-950/95' : 'bg-slate-900/70 opacity-80'}`} role="article">
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-900/80 text-center px-4 text-sm text-slate-300">
            <span>{title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent" />
      </div>
      <div className="space-y-3 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Lesson {id}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm leading-6 text-slate-300">{summary}</p>
        <div className="flex items-center justify-between gap-3">
          {completed ? (
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">Completed</span>
          ) : unlocked ? (
            <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">Unlocked</span>
          ) : (
            <span className="rounded-full bg-slate-700/10 px-3 py-1 text-xs font-semibold text-slate-400">Locked</span>
          )}
          <Link
            to={unlocked ? `/lesson/${id}` : '#'}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${unlocked ? 'bg-white text-slate-950 hover:bg-slate-100' : 'cursor-not-allowed bg-slate-700 text-slate-400'}`}
          >
            {unlocked ? 'Open' : 'Locked'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;