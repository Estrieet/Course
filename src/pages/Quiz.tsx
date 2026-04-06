import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizForm from '../components/QuizForm';
import { getLessonById } from '../services/lessonService';
import { useProgress } from '../hooks/useProgress';

const Quiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lesson = getLessonById(Number(id));
  const { progress, updateUserProgress } = useProgress();
  const [score, setScore] = useState<number | null>(null);

  if (!lesson) {
    return <div className="p-6">Lesson not found</div>;
  }

  const handleQuizComplete = (quizScore: number) => {
    setScore(quizScore);
    if (quizScore >= 70) {
      // Unlock next lesson
      const nextLessonId = lesson.id + 1;
      updateUserProgress({
        unlockedLessons: [...progress.unlockedLessons, nextLessonId],
      });
    }
  };

  return (
    <div className="p-6" role="main">
      <h1 className="text-3xl font-bold mb-4">Quiz for {lesson.title}</h1>
      {score === null ? (
        <QuizForm questions={lesson.quiz.questions} lessonId={lesson.id} onComplete={handleQuizComplete} />
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg mb-4">Your score: {score}%</p>
          {score >= 70 ? (
            <p className="text-green-600">Congratulations! Next lesson unlocked.</p>
          ) : (
            <p className="text-red-600">Try again to unlock the next lesson.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;