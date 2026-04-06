import React, { useState } from 'react';
import { useProgress } from '../hooks/useProgress';

interface HomeworkSectionProps {
  homework: string;
  lessonId: number;
}

const HomeworkSection: React.FC<HomeworkSectionProps> = ({ homework, lessonId }) => {
  const { progress, updateUserProgress } = useProgress();
  const completed = progress.completedHomework.includes(lessonId);
  const savedAnswer = progress.homeworkAnswers[lessonId] || '';
  const [answer, setAnswer] = useState(savedAnswer);

  const handleSubmit = () => {
    if (!answer.trim()) return;
    updateUserProgress({
      completedHomework: Array.from(new Set([...progress.completedHomework, lessonId])),
      unlockedLessons: Array.from(new Set([...progress.unlockedLessons, lessonId + 1])),
      homeworkAnswers: { ...progress.homeworkAnswers, [lessonId]: answer.trim() },
    });
  };

  return (
    <div
      className="animate-fade-in rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20"
      role="region"
      aria-label="Homework"
    >
      <p className="text-xs uppercase tracking-[0.28em] text-slate-400 mb-1">Homework</p>
      <h3 className="text-lg font-semibold text-white mb-4">{homework}</h3>

      {completed ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-xs">✓</span>
            Homework submitted
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Your answer</p>
            <p className="leading-relaxed">{savedAnswer}</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full rounded-[1.25rem] border border-white/10 bg-slate-950 p-4 text-slate-100 placeholder-slate-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition resize-none"
            rows={4}
            placeholder="Write your answer here..."
            aria-label="Homework answer"
          />
          <button
            onClick={handleSubmit}
            disabled={!answer.trim()}
            className="gradient-btn text-sm disabled:cursor-not-allowed disabled:opacity-40"
          >
            Submit Answer
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeworkSection;
