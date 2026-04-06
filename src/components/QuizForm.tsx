import React, { useState } from 'react';
import { QuizQuestion } from '../services/lessonService';
import { useProgress } from '../hooks/useProgress';

interface QuizFormProps {
  questions: QuizQuestion[];
  lessonId: number;
  onComplete: (score: number) => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ questions, lessonId, onComplete }) => {
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const { updateUserProgress } = useProgress();

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].answer).length;
    const score = Math.round((correctAnswers / questions.length) * 100);
    
    updateUserProgress({
      quizScores: { [lessonId]: score },
    });
    
    onComplete(score);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4" role="form">
      <h2 className="text-2xl font-bold mb-4">Quiz</h2>
      {questions.map((question, qIndex) => (
        <div key={qIndex} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
          {question.options.map((option, oIndex) => (
            <label key={oIndex} className="block mb-1">
              <input
                type="radio"
                name={`question-${qIndex}`}
                value={oIndex}
                checked={answers[qIndex] === oIndex}
                onChange={() => handleAnswerChange(qIndex, oIndex)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={answers.includes(-1)}
      >
        Submit Quiz
      </button>
    </form>
  );
};

export default QuizForm;