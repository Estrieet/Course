import React from 'react';
import { useProgress } from '../hooks/useProgress';
import LessonCard from '../components/LessonCard';
import ProgressBar from '../components/ProgressBar';
import { getLessons } from '../services/lessonService';

const Dashboard: React.FC = () => {
  const { progress } = useProgress();
  const lessons = getLessons();

  const completedCount = progress.completedLessons.length;
  const totalLessons = lessons.length;
  const progressPercentage = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="p-6" role="main">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Track your learning progress and continue where you left off</p>
      </div>

      <div className="modern-card p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-white mb-2">Overall Progress</h2>
            <p className="text-sm text-slate-400">
              {completedCount} of {totalLessons} lessons completed
            </p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-blue-400">{progressPercentage}%</span>
            <p className="text-xs text-slate-400 mt-1">Completion</p>
          </div>
        </div>
        <div className="mt-4">
          <ProgressBar progress={progressPercentage} label="Course completion" />
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold text-white mb-4">Lessons</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map(lesson => (
          <LessonCard
            key={lesson.id}
            id={lesson.id}
            title={lesson.title}
            image={lesson.image}
            summary={lesson.summary?.[0] ?? lesson.content.slice(0, 80) + '...'}
            completed={progress.completedLessons.includes(lesson.id)}
            unlocked={progress.unlockedLessons.includes(lesson.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;