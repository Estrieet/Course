import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFromStorage, setToStorage, removeFromStorage } from '../../services/api';

interface TypingSession {
  text: string;
  typedInput: string;
  wpm: number;
  accuracy: number;
  completedAt: string;
}

interface QuizAnswerRecord {
  selectedAnswers: number[];
  score: number;
  submittedAt: string;
}

interface ProgressState {
  completedLessons: number[];
  quizScores: { [lessonId: number]: number };
  quizAnswers: { [lessonId: number]: QuizAnswerRecord };
  typingSessions: TypingSession[];
  completedHomework: number[];
  homeworkAnswers: { [lessonId: number]: string };
  typingStats: {
    totalSessions: number;
    averageWPM: number;
    averageAccuracy: number;
    bestWPM: number;
  };
  achievements: number[];
  unlockedLessons: number[];
}

const storedProgress = getFromStorage<Partial<ProgressState>>('userProgress');

const initialState: ProgressState = {
  completedLessons: [],
  quizScores: {},
  quizAnswers: {},
  typingSessions: [],
  completedHomework: [],
  homeworkAnswers: {},
  typingStats: {
    totalSessions: 0,
    averageWPM: 0,
    averageAccuracy: 0,
    bestWPM: 0,
  },
  achievements: [],
  unlockedLessons: [1],
  ...storedProgress,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    updateProgress: (state, action: PayloadAction<Partial<ProgressState>>) => {
      Object.assign(state, action.payload);
      setToStorage('userProgress', state);
    },
    resetProgress: () => {
      removeFromStorage('userProgress');
      return {
        completedLessons: [],
        quizScores: {},
        quizAnswers: {},
        typingSessions: [],
        completedHomework: [],
        homeworkAnswers: {},
        typingStats: { totalSessions: 0, averageWPM: 0, averageAccuracy: 0, bestWPM: 0 },
        achievements: [],
        unlockedLessons: [1],
      };
    },
  },
});

export const { updateProgress, resetProgress } = progressSlice.actions;
export default progressSlice.reducer;
