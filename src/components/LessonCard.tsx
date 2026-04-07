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
    <div
      className={`group overflow-hidden modern-card transition-all duration-300 ${
        unlocked ? 'border-white/10' : 'border-white/5 opacity-75'
      }`}
      role="article"
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 text-center px-4">
            <span className="text-lg font-semibold text-white">{title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      <div className="space-y-4 p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">Lesson {id}</p>
          <h3 className="mt-2 text-xl font-bold text-white">{title}</h3>
        </div>

        <p className="text-sm leading-relaxed text-slate-400">{summary}</p>

        <div className="flex items-center justify-between gap-3 pt-2">
          {completed ? (
            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400 border border-green-500/20">
              ✓ Completed
            </span>
          ) : unlocked ? (
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20">
              Unlocked
            </span>
          ) : (
            <span className="rounded-full bg-slate-700/20 px-3 py-1 text-xs font-semibold text-slate-500 border border-slate-700/30">
              🔒 Locked
            </span>
          )}

          <Link
            to={unlocked ? `/lesson/${id}` : '#'}
            className={`btn-secondary text-sm ${!unlocked && 'cursor-not-allowed opacity-50'}`}
          >
            {unlocked ? 'Open' : 'Locked'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;