import React from 'react';
import { useProgress } from '../hooks/useProgress';
import LessonCard from '../components/LessonCard';
import { getLessons } from '../services/lessonService';

const Lessons: React.FC = () => {
  const { progress } = useProgress();
  const lessons = getLessons();

  return (
    <div className="p-6" role="main">
      <h1 className="text-3xl font-bold mb-6">All Lessons</h1>
      <p className="mb-6 text-slate-300 max-w-3xl">Browse the full lesson library and unlock more as you complete each step. Each lesson includes homework and a quiz to help you learn.</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {lessons.map((lesson) => (
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

export default Lessons;
