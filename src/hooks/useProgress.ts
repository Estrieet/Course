import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { updateProgress } from '../store/slices/progressSlice';
import { useAppDispatch } from '../store/store';

export const useProgress = () => {
  const dispatch = useAppDispatch();
  const progress = useSelector((state: RootState) => state.progress);

  const updateUserProgress = (newProgress: Partial<typeof progress>) => {
    dispatch(updateProgress(newProgress));
  };

  return { progress, updateUserProgress };
};