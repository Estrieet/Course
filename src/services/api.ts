export const getFromStorage = (key: string): any => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setToStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromStorage = (key: string): void => {
  localStorage.removeItem(key);
};