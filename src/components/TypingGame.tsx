import React, { useState, useEffect, useRef } from 'react';
import { useProgress } from '../hooks/useProgress';

interface TypingGameProps {
  text: string;
}

const TypingGame: React.FC<TypingGameProps> = ({ text }) => {
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [completed, setCompleted] = useState(false);
  const [sessionSaved, setSessionSaved] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { progress, updateUserProgress } = useProgress();

  useEffect(() => {
    setInput('');
    setStartTime(null);
    setEndTime(null);
    setWpm(0);
    setAccuracy(100);
    setCompleted(false);
    setSessionSaved(false);
    if (inputRef.current) inputRef.current.focus();
  }, [text]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
    if (!startTime) setStartTime(Date.now());
    if (value === text && !completed) {
      setEndTime(Date.now());
      setCompleted(true);
    }
  };

  useEffect(() => {
    if (startTime && endTime && !sessionSaved) {
      const timeInMinutes = (endTime - startTime) / 60000;
      const wordsTyped = text.split(' ').length;
      const calculatedWpm = Math.max(0, Math.round(wordsTyped / timeInMinutes));
      setWpm(calculatedWpm);

      const correctChars = input.split('').filter((char, index) => char === text[index]).length;
      const calculatedAccuracy = Math.round((correctChars / text.length) * 100);
      setAccuracy(calculatedAccuracy);

      const totalSessions = progress.typingStats.totalSessions + 1;
      const averageWPM = Math.round(
        (progress.typingStats.averageWPM * progress.typingStats.totalSessions + calculatedWpm) / totalSessions
      );
      const averageAccuracy = Math.round(
        (progress.typingStats.averageAccuracy * progress.typingStats.totalSessions + calculatedAccuracy) / totalSessions
      );
      const bestWPM = Math.max(progress.typingStats.bestWPM, calculatedWpm);

      updateUserProgress({
        typingStats: { totalSessions, averageWPM, averageAccuracy, bestWPM },
        typingSessions: [
          ...progress.typingSessions,
          {
            text,
            typedInput: input,
            wpm: calculatedWpm,
            accuracy: calculatedAccuracy,
            completedAt: new Date().toISOString(),
          },
        ],
      });
      setSessionSaved(true);
    }
  }, [endTime, startTime, text, input, progress, sessionSaved, updateUserProgress]);

  const renderText = () =>
    text.split('').map((char, index) => {
      let className = 'transition-colors duration-100';
      if (index < input.length) {
        className += input[index] === char
          ? ' bg-violet-600/50 text-white rounded'
          : ' bg-rose-600/60 text-white rounded';
      } else if (index === input.length) {
        className += ' border-b-2 border-violet-400';
      }
      return <span key={index} className={className}>{char}</span>;
    });

  return (
    <div className="space-y-4" role="main">
      <h2 className="text-2xl font-bold">Typing Practice</h2>

      <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5 font-mono text-base leading-relaxed tracking-wide text-slate-100">
        {renderText()}
      </div>

      <textarea
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        className="w-full rounded-[1.25rem] border border-white/10 bg-slate-950 p-4 font-mono text-slate-100 placeholder-slate-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition"
        rows={4}
        placeholder="Start typing here..."
        aria-label="Typing input"
        disabled={completed}
      />

      <div className="flex gap-6 text-sm text-slate-400">
        <span>WPM: <strong className="text-white">{wpm}</strong></span>
        <span>Accuracy: <strong className="text-white">{accuracy}%</strong></span>
        {startTime && !completed && (
          <span className="text-violet-400">Typing...</span>
        )}
      </div>

      {completed && (
        <div className="animate-bounce-in rounded-[1.5rem] border border-violet-500/30 bg-violet-500/10 p-6 text-center shadow-xl shadow-violet-500/10">
          <p className="text-2xl font-bold text-white">Exercise complete!</p>
          <div className="mt-3 flex justify-center gap-8 text-sm">
            <span>WPM: <strong className="text-violet-300 text-lg">{wpm}</strong></span>
            <span>Accuracy: <strong className="text-violet-300 text-lg">{accuracy}%</strong></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TypingGame;
