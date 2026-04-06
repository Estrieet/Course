import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import QuizForm from '../components/QuizForm';
import { getLessonById } from '../services/lessonService';
import { useProgress } from '../hooks/useProgress';

const Quiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lesson = getLessonById(Number(id));
  const { progress, updateUserProgress } = useProgress();
  const [score, setScore] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

  if (!lesson) {
    return <div className="p-6">Lesson not found</div>;
  }

  const handleQuizComplete = ({ score: s, selectedAnswers: sa }: { score: number; selectedAnswers: number[] }) => {
    setScore(s);
    setSelectedAnswers(sa);
    const nextLessonId = lesson.id + 1;
    updateUserProgress({
      quizScores: { ...progress.quizScores, [lesson.id]: s },
      quizAnswers: {
        ...progress.quizAnswers,
        [lesson.id]: { selectedAnswers: sa, score: s, submittedAt: new Date().toISOString() },
      },
      completedLessons: Array.from(new Set([...progress.completedLessons, lesson.id])),
      unlockedLessons: s >= 70
        ? Array.from(new Set([...progress.unlockedLessons, nextLessonId]))
        : progress.unlockedLessons,
    });
  };

  const handleRetry = () => {
    setScore(null);
    setSelectedAnswers([]);
  };

  const correctCount = selectedAnswers.filter(
    (ans, i) => ans === lesson.quiz.questions[i]?.answer
  ).length;

  return (
    <div className="p-6 space-y-6" role="main">
      <h1 className="text-3xl font-bold animate-fade-in">Quiz — {lesson.title}</h1>

      {score === null ? (
        <QuizForm
          questions={lesson.quiz.questions}
          lessonId={lesson.id}
          onComplete={handleQuizComplete}
        />
      ) : (
        <div className="space-y-6">

          {/* Score card */}
          <div className="animate-bounce-in rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 text-center shadow-2xl shadow-slate-950/20">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-2">Your result</p>
            <p
              className="text-7xl font-bold mb-3"
              style={{ background: 'linear-gradient(135deg,#8b5cf6,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              {score}%
            </p>
            <p className="text-slate-400 text-sm mb-1">
              {correctCount} of {lesson.quiz.questions.length} correct
            </p>
            {score >= 70 ? (
              <p className="text-emerald-400 font-semibold mt-2">Next lesson unlocked!</p>
            ) : (
              <p className="text-rose-400 font-semibold mt-2">Score 70% or above to unlock the next lesson.</p>
            )}
          </div>

          {/* Per-question answer review */}
          <div className="animate-fade-in space-y-4">
            <h2 className="text-xl font-semibold text-white">Answer Review</h2>
            {lesson.quiz.questions.map((q, i) => {
              const chosen = selectedAnswers[i];
              const isCorrect = chosen === q.answer;
              return (
                <div
                  key={q.id}
                  className={`animate-fade-in stagger-${Math.min(i + 1, 6)} rounded-[1.5rem] border p-5 transition ${
                    isCorrect
                      ? 'border-emerald-500/30 bg-emerald-500/5'
                      : 'border-rose-500/30 bg-rose-500/5'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <p className="font-semibold text-white">Q{i + 1}: {q.question}</p>
                    <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${isCorrect ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}`}>
                      {isCorrect ? '✓ Correct' : '✗ Wrong'}
                    </span>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 text-sm">
                    {q.options.map((opt, oi) => {
                      const isChosen = oi === chosen;
                      const isAnswer = oi === q.answer;
                      let cls = 'rounded-xl border px-4 py-2 transition ';
                      if (isAnswer) cls += 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300';
                      else if (isChosen && !isCorrect) cls += 'border-rose-500/40 bg-rose-500/10 text-rose-300 line-through';
                      else cls += 'border-white/5 bg-white/5 text-slate-400';
                      return (
                        <div key={oi} className={cls}>
                          {isChosen && !isAnswer && <span className="mr-1 text-rose-400">✗</span>}
                          {isAnswer && <span className="mr-1 text-emerald-400">✓</span>}
                          {opt}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="animate-fade-in stagger-3 grid gap-3 sm:grid-cols-3">
            <button
              onClick={handleRetry}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-950/80"
            >
              Retry Quiz
            </button>
            <Link
              to={`/lesson/${lesson.id}`}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Review Lesson
            </Link>
            {score >= 70 && getLessonById(lesson.id + 1) && (
              <Link
                to={`/lesson/${lesson.id + 1}`}
                className="gradient-btn justify-center text-sm"
              >
                Next Lesson →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
