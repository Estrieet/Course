import React from 'react';
import { useProgress } from '../hooks/useProgress';

interface HomeworkSectionProps {
  homework: string;
  lessonId: number;
}

const HomeworkSection: React.FC<HomeworkSectionProps> = ({ homework, lessonId }) => {
  const { progress, updateUserProgress } = useProgress();
  const completed = progress.completedHomework.includes(lessonId);

  const handleComplete = () => {
    updateUserProgress({
      completedHomework: [...progress.completedHomework, lessonId],
    });
  };

  return (
    <div className="p-4 border rounded-lg" role="region">
      <h3 className="text-lg font-semibold mb-2">Homework</h3>
      <p className="mb-4">{homework}</p>
      {!completed ? (
        <button
          onClick={handleComplete}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Mark as Completed
        </button>
      ) : (
        <span className="text-green-600">✓ Homework Completed</span>
      )}
    </div>
  );
};

export default HomeworkSection;