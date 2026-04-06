import React from 'react';

const Help: React.FC = () => {
  return (
    <div className="p-6" role="main">
      <h1 className="text-3xl font-bold mb-6">Help & Learning Guide</h1>

      <div className="mb-8 rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20">
        <h2 className="text-2xl font-semibold mb-3">How to use this platform</h2>
        <p className="text-slate-300 leading-relaxed">
          This platform is built to help you learn digital literacy clearly and confidently. Start with a lesson, complete the homework assignment, take the quiz, and continue to the next topic once you have mastered the basics.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
        <ol className="list-decimal list-inside mt-2 space-y-2 text-slate-300">
          <li>Open the <strong>Lessons</strong> page and begin with Lesson 1.</li>
          <li>Read the lesson content, take notes, and explore examples.</li>
          <li>Complete the <strong>Homework</strong> to apply what you learned.</li>
          <li>Take the associated <strong>Quiz</strong> to test your understanding.</li>
          <li>Practice typing using the <strong>Typing</strong> page to build speed and accuracy.</li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Topics you will learn</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-900/80 p-5 border border-white/10">
            <h3 className="font-semibold text-white">Digital Fundamentals</h3>
            <p className="mt-2 text-slate-300">Learn how devices, operating systems, and applications work together.</p>
          </div>
          <div className="rounded-2xl bg-slate-900/80 p-5 border border-white/10">
            <h3 className="font-semibold text-white">Internet & Browsing</h3>
            <p className="mt-2 text-slate-300">Understand safe web search, email, navigation, and smart browsing habits.</p>
          </div>
          <div className="rounded-2xl bg-slate-900/80 p-5 border border-white/10">
            <h3 className="font-semibold text-white">Productivity Tools</h3>
            <p className="mt-2 text-slate-300">Use word processors, spreadsheets, and presentation tools more effectively.</p>
          </div>
          <div className="rounded-2xl bg-slate-900/80 p-5 border border-white/10">
            <h3 className="font-semibold text-white">Privacy & Security</h3>
            <p className="mt-2 text-slate-300">Protect your personal data, create strong passwords, and spot online threats.</p>
          </div>
          <div className="rounded-2xl bg-slate-900/80 p-5 border border-white/10">
            <h3 className="font-semibold text-white">Digital Citizenship</h3>
            <p className="mt-2 text-slate-300">Build respectful online habits, avoid misinformation, and stay responsible.</p>
          </div>
          <div className="rounded-2xl bg-slate-900/80 p-5 border border-white/10">
            <h3 className="font-semibold text-white">Typing & Workflow</h3>
            <p className="mt-2 text-slate-300">Gain faster typing, better accuracy, and smoother digital workflows.</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Study tips</h2>
        <ul className="list-disc list-inside mt-2 space-y-2 text-slate-300">
          <li>Review each lesson slowly and repeat any ideas that feel new.</li>
          <li>Practice homework tasks until you can do them without help.</li>
          <li>Use quizzes to identify areas where you need more review.</li>
          <li>Type every day to build speed and reduce mistakes.</li>
          <li>Track your progress and revisit earlier lessons when needed.</li>
        </ul>
      </div>

      <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/20">
        <h2 className="text-xl font-semibold mb-4">YouTube resource links</h2>
        <p className="text-slate-300 mb-4">
          These videos are recommended for extra learning. They match the core topics covered here and help deepen your understanding with real demonstrations.
        </p>
        <ul className="space-y-3 text-slate-300">
          <li>
            <a href="https://www.youtube.com/watch?v=0pJcTG5Wgt0" target="_blank" rel="noreferrer" className="text-violet-300 hover:text-violet-100 underline">
              Digital Literacy Basics: Understanding Computers and the Web
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=O3wGPSLFv8U" target="_blank" rel="noreferrer" className="text-violet-300 hover:text-violet-100 underline">
              Internet Safety and Privacy Tips for Beginners
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=sl18T1bLrnk" target="_blank" rel="noreferrer" className="text-violet-300 hover:text-violet-100 underline">
              Productivity Tools: Word Processing, Spreadsheets, & Presentation Skills
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Help;
