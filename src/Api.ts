export interface Category {
  name: string;
  image: string;
  page: string;
}
export interface Cards {
  _id: string;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  category: string;
  clicks: number;
  correct: number;
  wrong: number;
  errorspers: number;
}
interface User {
  name: string;
  password: string;
}

const CATEGORIES = 'categories';
const CARDS = 'cards';
const ADMIN = 'admin';
const url = (enpoint: string) => `https://sleepy-sea-65274.herokuapp.com/api/${enpoint}`;

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(url(CATEGORIES));
  const data = await response.json();
  return data;
};
export const deleteCategory = async (word: string): Promise<void> => {
  await fetch(url(`${CATEGORIES}/${word}`), { method: 'DELETE' });
};
export const getCards = async (): Promise<Cards[]> => {
  const response = await fetch(url(CARDS));
  const data = await response.json();
  return data;
};
export const getCardByName = async (word: string): Promise<Cards[]> => {
  const response = await fetch(url(`${CARDS}/${word}`));
  const data = await response.json();
  return data;
};
export const deleteCard = async (word: string): Promise<void> => {
  await fetch(url(`${CARDS}/${word}`), { method: 'DELETE' });
};
export const deleteCards = async (category: { categoryname: string }): Promise<void> => {
  await fetch(url(`${CARDS}`), {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(category),
  });
};
export const updateCard = async (body: Cards): Promise<Cards> => {
  const response = await fetch(url(CARDS), {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};
export const login = async (body: User): Promise<{ token: string }> => {
  const response = await fetch(url(`${ADMIN}`), {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};
