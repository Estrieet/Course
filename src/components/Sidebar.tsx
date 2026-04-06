import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4" role="complementary">
      <nav>
        <ul className="space-y-2">
          <li><Link to="/dashboard" className="block p-2 hover:bg-gray-200">Dashboard</Link></li>
          <li><Link to="/lesson" className="block p-2 hover:bg-gray-200">Lessons</Link></li>
          <li><Link to="/typing" className="block p-2 hover:bg-gray-200">Typing Practice</Link></li>
          <li><Link to="/quiz" className="block p-2 hover:bg-gray-200">Quizzes</Link></li>
          <li><Link to="/progress" className="block p-2 hover:bg-gray-200">Progress</Link></li>
          <li><Link to="/help" className="block p-2 hover:bg-gray-200">Help</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;