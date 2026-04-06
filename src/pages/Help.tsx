import React from 'react';

const Help: React.FC = () => {
  return (
    <div className="p-6" role="main">
      <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
      
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
        <p>Welcome to the Digital Literacy Platform! Here's how to get started:</p>
        <ol className="list-decimal list-inside mt-2">
          <li>Create an account or log in</li>
          <li>Start with the first lesson</li>
          <li>Complete homework and quizzes to unlock new content</li>
          <li>Practice typing to improve your skills</li>
        </ol>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <ul className="list-disc list-inside">
          <li><strong>Lessons:</strong> Interactive content to learn digital skills</li>
          <li><strong>Homework:</strong> Assignments to reinforce learning</li>
          <li><strong>Quizzes:</strong> Tests to check your understanding</li>
          <li><strong>Typing Practice:</strong> Improve your typing speed and accuracy</li>
          <li><strong>Progress Tracking:</strong> Monitor your learning journey</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Accessibility</h2>
        <p>This platform supports:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Keyboard navigation</li>
          <li>Screen reader compatibility</li>
          <li>High contrast mode</li>
          <li>Large text option</li>
        </ul>
      </div>
    </div>
  );
};

export default Help;