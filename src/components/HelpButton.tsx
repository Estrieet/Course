import React, { useState } from 'react';

const HelpButton: React.FC = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowHelp(!showHelp)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        aria-label="Help"
      >
        ?
      </button>
      {showHelp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" role="dialog">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h2 className="text-xl font-bold mb-4">Help</h2>
            <p className="mb-4">Welcome to the Digital Literacy Platform! Here are some tips:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Complete lessons to unlock new content</li>
              <li>Practice typing to improve your skills</li>
              <li>Take quizzes to test your knowledge</li>
              <li>Track your progress on the Progress page</li>
            </ul>
            <button
              onClick={() => setShowHelp(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpButton;