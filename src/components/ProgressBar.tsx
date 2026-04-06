import React from 'react';

interface ProgressBarProps {
  progress: number;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
      <div
        className="bg-blue-600 h-4 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
      <span className="sr-only">{label}: {progress}% complete</span>
    </div>
  );
};

export default ProgressBar;