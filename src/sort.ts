interface Word {
  category: string;
  word: string;
  translation: string;
  clicks: number;
  correct: number;
  wrong: number;
  errors: number;
}
export function sortBycategory(arr: Word[], index: number): Word[] {
  let arr1: Word[] = [];
  if (index === 0) {
    arr1 = arr.sort((a, b) => (a.word > b.word ? 1 : -1));
  }
  if (index === 1) {
    arr1 = arr.sort((a, b) => (a.category > b.category ? 1 : -1));
  }
  if (index === 2) {
    arr1 = arr.sort((a, b) => (a.translation > b.translation ? 1 : -1));
  }
  if (index === 3) {
    arr1 = arr.sort((a, b) => (a.clicks > b.clicks ? 1 : -1));
  }
  if (index === 4) {
    arr1 = arr.sort((a, b) => (a.correct > b.correct ? 1 : -1));
  }
  if (index === 5) {
    arr1 = arr.sort((a, b) => (a.wrong > b.wrong ? 1 : -1));
  }
  if (index === 6) {
    arr1 = arr.sort((a, b) => (a.errors > b.errors ? 1 : -1));
  }
  return arr1;
}
