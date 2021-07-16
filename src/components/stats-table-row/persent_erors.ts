export const errors = (correct: number, wrong: number): number => {
  if (correct !== 0 && wrong !== 0) {
    return Math.floor((wrong / (correct + wrong)) * 100);
  }
  if (correct === 0 && wrong !== 0) {
    return 100;
  }
  return 0;
};
