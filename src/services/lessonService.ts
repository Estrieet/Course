import lessonsData from '../data/lessons.json';

export interface Lesson {
  id: number;
  title: string;
  image?: string;
  summary?: string[];
  content: string;
  module: string;
  level: number;
  homework: {
    id: number;
    question: string;
    completed: boolean;
  };
  quiz: {
    id: number;
    questions: QuizQuestion[];
  };
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number;
}

export const getLessons = (): Lesson[] => {
  return lessonsData as Lesson[];
};

export const getLessonById = (id: number): Lesson | undefined => {
  return getLessons().find(lesson => lesson.id === id);
};