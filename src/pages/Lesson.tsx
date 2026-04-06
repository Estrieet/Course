import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getLessonById } from '../services/lessonService';
import HomeworkSection from '../components/HomeworkSection';
import LessonIllustration from '../components/LessonIllustration';
import { useProgress } from '../hooks/useProgress';
import examplesData from '../data/examples.json';

interface Example {
  icon: string;
  title: string;
  description: string;
}

const examples = examplesData as Record<string, Example[]>;

const Lesson: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lesson = getLessonById(Number(id));
  const { progress, updateUserProgress } = useProgress();
  const [justCompleted, setJustCompleted] = useState(false);

  if (!lesson) {
    return <div className="p-6">Lesson not found</div>;
  }

  const completed = progress.completedLessons.includes(lesson.id);
  const nextLessonId = lesson.id + 1;
  const nextLesson = getLessonById(nextLessonId);
  const lessonExamples: Example[] = examples[String(lesson.id)] ?? [];

  const summaryPoints = lesson.summary && lesson.summary.length > 0
    ? lesson.summary
    : [lesson.content.slice(0, 120) + '...'];

  const handleLessonComplete = () => {
    updateUserProgress({
      completedLessons: Array.from(new Set([...progress.completedLessons, lesson.id])),
      unlockedLessons: Array.from(new Set([...progress.unlockedLessons, nextLessonId])),
    });
    setJustCompleted(true);
  };

  return (
    <div className="p-6 space-y-8" role="main">

      {/* Title */}
      <div className="animate-fade-in">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-1">{lesson.module} · Level {lesson.level}</p>
        <h1 className="text-3xl font-bold text-white">{lesson.title}</h1>
      </div>

      {/* Post-completion card */}
      {(completed || justCompleted) && (
        <div className="animate-bounce-in rounded-[1.75rem] border border-violet-500/30 bg-violet-500/10 p-6 shadow-xl shadow-violet-500/10">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/20 text-violet-300 text-sm font-bold">✓</span>
            <p className="text-lg font-semibold text-white">Lesson complete!</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link to={`/quiz/${lesson.id}`} className="gradient-btn justify-center text-sm">
              Take the Quiz
            </Link>
            {nextLesson && (
              <Link
                to={`/lesson/${nextLessonId}`}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-950/80 hover:-translate-y-0.5"
              >
                Next Lesson →
              </Link>
            )}
            <button
              onClick={() => setJustCompleted(false)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:-translate-y-0.5"
            >
              Re-read Lesson
            </button>
          </div>
        </div>
      )}

      {/* Main 2-col layout */}
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">

        {/* Left: illustration + content + key ideas */}
        <div className="animate-slide-left space-y-6">

          {/* SVG Illustration */}
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/90 overflow-hidden shadow-2xl shadow-slate-950/20">
            <LessonIllustration lessonId={lesson.id} />
          </div>

          {/* Description card */}
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-slate-950/20">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500 mb-3">Description</p>
            <p className="text-slate-300 leading-relaxed">{lesson.content}</p>
          </div>

          {/* Key ideas */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Key Ideas</p>
            <div className="grid gap-3 md:grid-cols-3">
              {summaryPoints.map((point, index) => (
                <div
                  key={index}
                  className={`animate-fade-in stagger-${Math.min(index + 1, 6)} rounded-3xl bg-slate-900/90 p-4 border border-white/10 transition hover:border-violet-400/30`}
                >
                  <p className="text-sm text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: sidebar overview */}
        <aside className="animate-slide-right space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20 self-start sticky top-24">
          <div>
            <h2 className="text-xl font-semibold text-white">Lesson overview</h2>
            <p className="mt-2 text-sm text-slate-400">A quick summary of what this lesson teaches.</p>
          </div>
          <div className="grid gap-3">
            <div className="rounded-[1.5rem] bg-slate-950/90 p-4 border border-white/10">
              <p className="text-xs text-slate-500 uppercase tracking-[0.22em]">Module</p>
              <p className="mt-1 text-sm font-semibold text-white">{lesson.module}</p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-950/90 p-4 border border-white/10">
              <p className="text-xs text-slate-500 uppercase tracking-[0.22em]">Level</p>
              <p className="mt-1 text-sm font-semibold text-white">{lesson.level}</p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-950/90 p-4 border border-white/10">
              <p className="text-xs text-slate-500 uppercase tracking-[0.22em]">Practice challenge</p>
              <p className="mt-1 text-sm text-slate-300">{lesson.homework.question}</p>
            </div>
            {nextLesson && (
              <div className="rounded-[1.5rem] bg-slate-950/90 p-4 border border-white/10">
                <p className="text-xs text-slate-500 uppercase tracking-[0.22em]">Next lesson</p>
                <p className="mt-1 text-sm text-slate-300">{nextLesson.title}</p>
              </div>
            )}
          </div>

          {!completed && (
            <div className="space-y-3 pt-2">
              <button onClick={handleLessonComplete} className="primary-btn w-full justify-center">
                Mark Lesson Complete
              </button>
              <Link
                to={`/quiz/${lesson.id}`}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Take Lesson Quiz
              </Link>
            </div>
          )}
        </aside>
      </div>

      {/* Examples section */}
      {lessonExamples.length > 0 && (
        <section className="space-y-4 animate-fade-in">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-1">Examples</p>
            <h2 className="text-xl font-semibold text-white">Real-world examples</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {lessonExamples.map((ex, i) => (
              <div
                key={i}
                className={`animate-scale-in stagger-${i + 1} group rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl transition hover:border-violet-400/30 hover:-translate-y-1`}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/90 text-2xl transition group-hover:border-violet-500/30 group-hover:bg-violet-500/10">
                  {ex.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{ex.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{ex.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Homework */}
      <HomeworkSection homework={lesson.homework.question} lessonId={lesson.id} />
    </div>
  );
};

export default Lesson;
