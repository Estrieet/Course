import React, { useState } from 'react';
import { getLessons, getLessonById } from '../services/lessonService';
import { useProgress } from '../hooks/useProgress';
import { useAppDispatch } from '../store/store';
import { resetProgress } from '../store/slices/progressSlice';

type Tab = 'lessons' | 'typing' | 'homework';

const Teacher: React.FC = () => {
  const { progress } = useProgress();
  const dispatch = useAppDispatch();
  const lessons = getLessons();
  const [activeTab, setActiveTab] = useState<Tab>('lessons');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const avgScore = (() => {
    const scores = Object.values(progress.quizScores);
    return scores.length ? Math.round(scores.reduce((a: number, b: number) => a + b, 0) / scores.length) : null;
  })();

  const tabs: { key: Tab; label: string }[] = [
    { key: 'lessons', label: 'Lessons & Quizzes' },
    { key: 'typing', label: 'Typing Sessions' },
    { key: 'homework', label: 'Homework Answers' },
  ];

  return (
    <div className="p-6 space-y-8" role="main">

      {/* Header */}
      <div className="animate-fade-in flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Teacher view</p>
          <h1 className="text-3xl font-bold text-white mt-1">Student Dashboard</h1>
        </div>
        <button
          onClick={() => setShowResetConfirm(true)}
          className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-5 py-3 text-sm font-semibold text-rose-400 transition hover:bg-rose-500/20 hover:border-rose-500/50 shrink-0"
        >
          <span>↺</span> Reset All Progress
        </button>
      </div>

      {/* Reset confirmation dialog */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="reset-dialog-title">
          <div className="animate-scale-in w-full max-w-md rounded-[1.75rem] border border-rose-500/30 bg-slate-950 p-8 shadow-2xl shadow-rose-500/10">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/10 border border-rose-500/30 text-2xl">⚠️</div>
              <h2 id="reset-dialog-title" className="text-xl font-bold text-white">Reset all progress?</h2>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                This will permanently delete all completed lessons, quiz answers, homework submissions, and typing sessions. <strong className="text-rose-400">This cannot be undone.</strong>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  dispatch(resetProgress());
                  setShowResetConfirm(false);
                }}
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-500"
              >
                Yes, reset everything
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Overview stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 animate-fade-in stagger-1">
        {[
          {
            label: 'Lessons completed',
            value: `${progress.completedLessons.length} / ${lessons.length}`,
          },
          {
            label: 'Average quiz score',
            value: avgScore !== null ? `${avgScore}%` : '—',
          },
          {
            label: 'Typing sessions',
            value: progress.typingSessions.length,
          },
          {
            label: 'Homework submitted',
            value: `${progress.completedHomework.length} / ${lessons.length}`,
          },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`animate-scale-in stagger-${i + 1} rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5 shadow-xl`}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{stat.label}</p>
            <p
              className="mt-2 text-3xl font-bold"
              style={{ background: 'linear-gradient(135deg,#8b5cf6,#ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-white/10 animate-fade-in stagger-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-3 text-sm font-semibold rounded-t-xl transition ${
              activeTab === tab.key
                ? 'text-white border-b-2 border-violet-400 -mb-px'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab: Lessons & Quizzes */}
      {activeTab === 'lessons' && (
        <div className="space-y-5 animate-fade-in">
          {lessons.map((lesson, li) => {
            const score = progress.quizScores[lesson.id];
            const entry = progress.quizAnswers[lesson.id];
            const isCompleted = progress.completedLessons.includes(lesson.id);
            const fullLesson = getLessonById(lesson.id);

            return (
              <div
                key={lesson.id}
                className={`animate-slide-left stagger-${Math.min(li + 1, 6)} rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl transition hover:border-violet-400/20`}
              >
                {/* Lesson header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Lesson {lesson.id}</p>
                    <h3 className="text-lg font-semibold text-white mt-1">{lesson.title}</h3>
                  </div>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${isCompleted ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-700/40 text-slate-400'}`}>
                    {isCompleted ? 'Completed' : 'Pending'}
                  </span>
                </div>

                {/* Quiz summary */}
                <div className="grid gap-3 sm:grid-cols-2 mb-4">
                  <div className="rounded-2xl bg-slate-950/80 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Quiz score</p>
                    <p className={`mt-1 text-lg font-bold ${score !== undefined ? (score >= 70 ? 'text-emerald-400' : 'text-rose-400') : 'text-slate-500'}`}>
                      {score !== undefined ? `${score}%` : 'Not taken'}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/80 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Submitted</p>
                    <p className="mt-1 text-sm text-white">
                      {entry ? new Date(entry.submittedAt).toLocaleString() : '—'}
                    </p>
                  </div>
                </div>

                {/* Per-question answer breakdown */}
                {entry && fullLesson && (
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Multiple choice answers</p>
                    {fullLesson.quiz.questions.map((q, qi) => {
                      const chosen = entry.selectedAnswers[qi];
                      const isCorrect = chosen === q.answer;
                      return (
                        <div
                          key={q.id}
                          className={`rounded-2xl border px-4 py-3 text-sm ${isCorrect ? 'border-emerald-500/25 bg-emerald-500/5' : 'border-rose-500/25 bg-rose-500/5'}`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-slate-300 flex-1"><span className="text-slate-500">Q{qi + 1}: </span>{q.question}</p>
                            <span className={`shrink-0 text-xs font-semibold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {isCorrect ? '✓' : '✗'}
                            </span>
                          </div>
                          <div className="mt-2 space-y-1">
                            <p className="text-xs text-slate-500">
                              Student answered: <span className={`font-semibold ${isCorrect ? 'text-emerald-300' : 'text-rose-300'}`}>
                                {chosen !== undefined ? q.options[chosen] : '(no answer)'}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p className="text-xs text-slate-500">
                                Correct answer: <span className="font-semibold text-emerald-300">{q.options[q.answer]}</span>
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Tab: Typing Sessions */}
      {activeTab === 'typing' && (
        <div className="space-y-5 animate-fade-in">
          {progress.typingSessions.length === 0 ? (
            <p className="text-slate-400 text-sm">No typing sessions recorded yet.</p>
          ) : (
            [...progress.typingSessions].reverse().map((session, i) => (
              <div
                key={i}
                className={`animate-fade-in stagger-${Math.min(i + 1, 6)} rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <p className="text-sm font-semibold text-white">{new Date(session.completedAt).toLocaleString()}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-violet-300 font-semibold">{session.wpm} WPM</span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-slate-300">{session.accuracy}% accuracy</span>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-950/80 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Prompt text</p>
                    <p className="text-sm text-slate-300 leading-relaxed font-mono">{session.text}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-950/80 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">What was typed</p>
                    <p className="text-sm text-slate-300 leading-relaxed font-mono">
                      {session.typedInput || <span className="text-slate-600 italic">Not recorded</span>}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab: Homework Answers */}
      {activeTab === 'homework' && (
        <div className="space-y-5 animate-fade-in">
          {lessons.map((lesson, li) => {
            const answer = progress.homeworkAnswers[lesson.id];
            const submitted = progress.completedHomework.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                className={`animate-slide-left stagger-${Math.min(li + 1, 6)} rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Lesson {lesson.id}</p>
                    <h3 className="text-base font-semibold text-white mt-1">{lesson.title}</h3>
                  </div>
                  <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${submitted ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-700/40 text-slate-400'}`}>
                    {submitted ? 'Submitted' : 'Pending'}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-3">
                  <span className="text-slate-500">Task: </span>{lesson.homework.question}
                </p>
                {answer ? (
                  <div className="rounded-2xl bg-slate-950/80 border border-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Student's answer</p>
                    <p className="text-sm text-slate-200 leading-relaxed">{answer}</p>
                  </div>
                ) : (
                  <p className="text-sm text-slate-600 italic">No answer submitted yet.</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Teacher;
