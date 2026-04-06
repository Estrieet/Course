import typingData from '../data/typing.json';

export interface TypingText {
  id: number;
  lessonId: number;
  text: string;
}

export const getTypingTexts = (): TypingText[] => {
  return typingData as TypingText[];
};

export const getTypingTextById = (id: number): TypingText | undefined => {
  return getTypingTexts().find(text => text.id === id);
};