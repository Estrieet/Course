import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFromStorage, setToStorage } from '../../services/api';
import progressData from '../../data/progress.json';

interface ProgressState {
  completedLessons: number[];
  quizScores: { [lessonId: number]: number };
  completedHomework: number[];
  typingStats: {
    totalSessions: number;
    averageWPM: number;
    averageAccuracy: number;
    bestWPM: number;
  };
  achievements: number[];
  unlockedLessons: number[];
}

const initialState: ProgressState = getFromStorage('userProgress') || progressData;

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    updateProgress: (state, action: PayloadAction<Partial<ProgressState>>) => {
      Object.assign(state, action.payload);
      setToStorage('userProgress', state);
    },
  },
});

export const { updateProgress } = progressSlice.actions;
export default progressSlice.reducer;