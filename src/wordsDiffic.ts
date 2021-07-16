import { sortBycategory } from './sort';

interface Word {
  category: string;
  word: string;
  translation: string;
  clicks: number;
  correct: number;
  wrong: number;
  errors: number;
}
interface CardsCat {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

export const difficult = (): CardsCat[] => {
  const currmass: CardsCat[] = [];
  const mass: Word[] = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const word: Word = JSON.parse(localStorage.getItem(localStorage.key(i) as string) as string);
    mass.push(word);
  }
  const sortedarr = sortBycategory(mass, 6);
  sortedarr.reverse().length = 8;
  for (let i = 0; i < sortedarr.length; i += 1) {
    if (sortedarr[i].errors > 0) {
      currmass.push({
        word: sortedarr[i].word,
        translation: sortedarr[i].translation,
        image: `img/${sortedarr[i].word}.jpg`,
        audioSrc: `audio/${sortedarr[i].word}.mp3`,
      });
    }
  }

  return currmass;
};
