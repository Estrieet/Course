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
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { updateUserProgress } = useProgress();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);

    if (!startTime) {
      setStartTime(Date.now());
    }

    if (value === text) {
      setEndTime(Date.now());
    }
  };

  useEffect(() => {
    if (startTime && endTime) {
      const timeInMinutes = (endTime - startTime) / 60000;
      const wordsTyped = text.split(' ').length;
      const calculatedWpm = Math.round(wordsTyped / timeInMinutes);
      setWpm(calculatedWpm);

      const correctChars = input.split('').filter((char, index) => char === text[index]).length;
      const calculatedAccuracy = Math.round((correctChars / text.length) * 100);
      setAccuracy(calculatedAccuracy);

      updateUserProgress({
        typingStats: {
          totalSessions: 1, // Increment in real implementation
          averageWPM: calculatedWpm,
          averageAccuracy: calculatedAccuracy,
          bestWPM: calculatedWpm, // Update if better
        },
      });
    }
  }, [endTime, startTime, text, input, updateUserProgress]);

  const renderText = () => {
    return text.split('').map((char, index) => {
      let className = '';
      if (index < input.length) {
        className = input[index] === char ? 'bg-green-200' : 'bg-red-200';
      }
      return (
        <span key={index} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="p-4" role="main">
      <h2 className="text-2xl font-bold mb-4">Typing Practice</h2>
      <div className="mb-4 p-4 border rounded bg-gray-50">
        {renderText()}
      </div>
      <textarea
        ref={inputRef}
        value={input}
        onChange={handleInputChange}
        className="w-full p-2 border rounded"
        rows={4}
        placeholder="Start typing here..."
        aria-label="Typing input"
      />
      <div className="mt-4 flex space-x-4">
        <div>WPM: {wpm}</div>
        <div>Accuracy: {accuracy}%</div>
      </div>
    </div>
  );
};

export default TypingGame;