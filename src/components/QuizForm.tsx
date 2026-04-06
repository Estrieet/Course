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
      <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
        <h2 className="text-2xl font-bold mb-4">Quiz</h2>
        <p className="text-slate-400">Answer each question and submit when all are selected.</p>
      </div>
      {questions.map((question, qIndex) => (
        <div key={qIndex} className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-white">Question {qIndex + 1}</h3>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">{question.options.length} options</span>
          </div>
          <p className="mb-4 text-slate-300">{question.question}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {question.options.map((option, oIndex) => {
              const isSelected = answers[qIndex] === oIndex;
              return (
                <button
                  key={oIndex}
                  type="button"
                  onClick={() => handleAnswerChange(qIndex, oIndex)}
                  className={`rounded-2xl border px-4 py-3 text-left transition duration-200 ${isSelected ? 'border-violet-400 bg-violet-500/10 text-white shadow-lg shadow-violet-500/10' : 'border-white/10 bg-white/5 text-slate-200 hover:border-white/20 hover:bg-white/10'}`}
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
        className="gradient-btn disabled:cursor-not-allowed disabled:opacity-50"
        disabled={answers.indexOf(-1) !== -1}
      >
        Submit Quiz
      </button>
    </form>
  );
};

export default QuizForm;