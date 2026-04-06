import React from 'react';
import { Link } from 'react-router-dom';

interface LessonCardProps {
  id: number;
  title: string;
  completed: boolean;
  unlocked: boolean;
}

const LessonCard: React.FC<LessonCardProps> = ({ id, title, completed, unlocked }) => {
  return (
    <div className={`p-4 border rounded-lg ${unlocked ? 'bg-white' : 'bg-gray-200 opacity-50'}`} role="article">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">Lesson {id}</p>
      {completed && <span className="text-green-600">✓ Completed</span>}
      {unlocked ? (
        <Link to={`/lesson/${id}`} className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View Lesson
        </Link>
      ) : (
        <span className="mt-2 inline-block text-gray-500">Locked</span>
      )}
    </div>
  );
};

export default LessonCard;