import React, { useState } from 'react';
import TypingGame from '../components/TypingGame';
import { getTypingTexts } from '../services/typingService';

const Typing: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = getTypingTexts();

  const nextText = () => {
    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
  };

  return (
    <div className="p-6" role="main">
      <TypingGame text={texts[currentTextIndex].text} />
      <button
        onClick={nextText}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Next Text
      </button>
    </div>
  );
};

export default Typing;