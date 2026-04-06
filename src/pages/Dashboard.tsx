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
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overall Progress</h2>
        <ProgressBar progress={progressPercentage} label="Course completion" />
        <p className="mt-2">{completedCount} of {totalLessons} lessons completed</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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