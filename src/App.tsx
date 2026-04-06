import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HelpButton from './components/HelpButton';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Lessons from './pages/Lessons';
import Lesson from './pages/Lesson';
import Typing from './pages/Typing';
import Quiz from './pages/Quiz';
import QuizList from './pages/QuizList';
import Progress from './pages/Progress';
import Help from './pages/Help';
import Teacher from './pages/Teacher';
import Register from './pages/Register';
import AIAssistant from './pages/AIAssistant';

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <Header />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="relative flex flex-col xl:flex-row gap-6 px-4 py-6 xl:px-8 xl:py-8 mx-auto w-full max-w-7xl">
          <Sidebar />
          <main className="flex-1 min-w-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/lesson/:id" element={<Lesson />} />
              <Route path="/typing" element={<Typing />} />
              <Route path="/quiz" element={<QuizList />} />
              <Route path="/quiz/:id" element={<Quiz />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/teacher" element={<Teacher />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
              <Route path="/help" element={<Help />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
        </div>
      </div>
      <HelpButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
};

export default App;