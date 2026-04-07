import React, { useState } from 'react';
import { QuizQuestion } from '../services/lessonService';

interface QuizFormProps {
  questions: QuizQuestion[];
  lessonId: number;
  onComplete: (result: { score: number; selectedAnswers: number[] }) => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ questions, lessonId, onComplete }) => {
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));

  const handleAnswerChange = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctAnswers = answers.filter((answer, index) => answer === questions[index].answer).length;
    const score = Math.round((correctAnswers / questions.length) * 100);
    onComplete({ score, selectedAnswers: answers });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 p-4" role="form">
      <div className="modern-card p-6">
        <h2 className="text-2xl font-bold mb-2">Quiz</h2>
        <p className="text-slate-400">Answer each question and submit when all are selected.</p>
      </div>
      {questions.map((question, qIndex) => (
        <div key={qIndex} className="modern-card p-6 space-y-4">
          {/* Question Image */}
          {(question as any).image && (
            <div className="mb-4 flex justify-center">
              <div className="relative w-full max-w-[400px] rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={(question as any).image}
                  alt={`Illustration for question ${qIndex + 1}`}
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* Question Header */}
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-white">Question {qIndex + 1}</h3>
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-blue-400">
              {question.options.length} options
            </span>
          </div>

          {/* Question Text */}
          <p className="text-slate-300 text-base">{question.question}</p>

          {/* Answer Options */}
          <div className="grid gap-3 sm:grid-cols-2">
            {question.options.map((option, oIndex) => {
              const isSelected = answers[qIndex] === oIndex;
              return (
                <button
                  key={oIndex}
                  type="button"
                  onClick={() => handleAnswerChange(qIndex, oIndex)}
                  className={`rounded-xl border px-4 py-3 text-left transition duration-200 font-medium ${
                    isSelected
                      ? 'border-blue-400 bg-blue-500/15 text-white shadow-lg shadow-blue-500/10'
                      : 'border-slate-700 bg-slate-800/50 text-slate-200 hover:border-slate-600 hover:bg-slate-800'
                  }`}
                  aria-pressed={isSelected}
                  aria-label={`Question ${qIndex + 1}, option ${oIndex + 1}: ${option}`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={answers.indexOf(-1) !== -1}
      >
        Submit Quiz
      </button>
    </form>
  );
};

export default QuizForm;