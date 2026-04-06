import React from 'react';
import { useProgress } from '../hooks/useProgress';
import ProgressBar from '../components/ProgressBar';
import { getLessons } from '../services/lessonService';

const Progress: React.FC = () => {
  const { progress } = useProgress();
  const totalLessons = getLessons().length;

  return (
    <div className="p-6" role="main">
      <h1 className="text-3xl font-bold mb-6">Your Progress</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Course Completion</h2>
        <ProgressBar progress={(progress.completedLessons.length / totalLessons) * 100} label="Lessons completed" />
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Typing Statistics</h2>
        <p>Average WPM: {progress.typingStats.averageWPM}</p>
        <p>Average Accuracy: {progress.typingStats.averageAccuracy}%</p>
        <p>Best WPM: {progress.typingStats.bestWPM}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Quiz Scores</h2>
        <ul>
          {Object.entries(progress.quizScores).map(([lessonId, score]) => (
            <li key={lessonId}>Lesson {lessonId}: {score}%</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Achievements</h2>
        <ul className="list-disc list-inside">
          {progress.achievements.map(id => (
            <li key={id}>Achievement {id}</li> // In real implementation, fetch achievement details
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Progress;