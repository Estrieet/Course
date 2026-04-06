import React, { useState, useEffect, useCallback } from 'react';

const HelpButton: React.FC = () => {
  const [showHelp, setShowHelp] = useState(false);

  const handleClose = useCallback(() => setShowHelp(false), []);

  useEffect(() => {
    if (!showHelp) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [showHelp, handleClose]);

  return (
    <>
      <button
        onClick={() => setShowHelp(!showHelp)}
        className="fixed bottom-4 right-4 inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-xl shadow-violet-500/20 transition hover:opacity-90 hover:scale-110"
        style={{ backgroundImage: 'linear-gradient(135deg,#8b5cf6 0%,#ec4899 52%,#a855f7 100%)' }}
        aria-label="Open help guide"
        aria-expanded={showHelp}
      >
        ?
      </button>
      {showHelp && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center px-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="help-dialog-title"
        >
          <div className="animate-scale-in bg-slate-950 text-slate-100 p-6 rounded-[1.5rem] border border-white/10 shadow-2xl shadow-slate-950/40 max-w-lg w-full">
            <div className="mb-4">
              <h2 id="help-dialog-title" className="text-xl font-bold">Help & Learning Guide</h2>
              <p className="mt-2 text-slate-300">Use this quick guide to navigate lessons, quizzes, homework, and typing practice.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 mb-4">
              <div>
                <h3 className="font-semibold text-white">Start Here</h3>
                <ul className="list-disc list-inside mt-2 space-y-2 text-slate-300">
                  <li>Open <strong>Lessons</strong> and begin with Lesson 1.</li>
                  <li>Read the lesson material carefully.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white">Practice</h3>
                <ul className="list-disc list-inside mt-2 space-y-2 text-slate-300">
                  <li>Complete homework after each lesson.</li>
                  <li>Use typing practice to build accuracy.</li>
                </ul>
              </div>
            </div>
            <div className="mb-5">
              <h3 className="font-semibold text-white">Next steps</h3>
              <ul className="list-disc list-inside mt-2 space-y-2 text-slate-300">
                <li>Take the lesson quiz when ready.</li>
                <li>Review your progress on the Progress page.</li>
              </ul>
            </div>
            <button
              onClick={handleClose}
              className="gradient-btn text-sm"
              aria-label="Close help guide"
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
