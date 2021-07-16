interface CardsCat {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

export const words = async (): Promise<void> => {
  const res1 = await fetch('./cards.json');
  const cards1 = await res1.json();

  const mass: Array<CardsCat[]> = cards1.slice(1);
  mass.forEach((e) => {
    e.forEach((element) => {
      const obj = {
        category: cards1[0][mass.indexOf(e)],
        word: element.word,
        translation: element.translation,
        clicks: 0,
        correct: 0,
        wrong: 0,
        errors: 0,
      };
      localStorage.setItem(element.word, JSON.stringify(obj));
    });
  });
};
