import { BaseComponent } from '../../base-component';
import { getCategories, getCards, Cards, createCategorie, getCategoryByName, updateCategory, updateCard } from '../../../Api';
import { CardCategorie } from './admin-categorie/admin-categorie';
import { CreateCardCategorie } from './create-categorie/create-categorie';
import { CardWord } from './admin-word/admin-word';
import { CreateCardWord } from './create-word/create-word';

import './admin-main.scss';

interface Category {
  name: string;
  image?: string;
  page?: string;
}
export class AdminMain extends BaseComponent {
  public CreateCardCategorie: CreateCardCategorie;

  public CreateCardWord: CreateCardWord;

  constructor() {
    super('div', ['admin_main']);
    this.startCategories();
    this.CreateCardCategorie = new CreateCardCategorie();
    this.CreateCardWord = new CreateCardWord();
  }

  async startCategories(): Promise<void> {
    console.log(12312)
    const arr = getCategories();
    arr.then(async (data) => {
      console.log(data)
      this.addCategories(data);
    });
  }

  async addCategories(card: Array<Category>): Promise<void> {
    this.element.innerHTML = '';
    this.element.appendChild(this.CreateCardCategorie.element);
    card.forEach((e) => {

      // const arr = getCards();
      // arr.then((data) => {
      //   const wordcards = data.filter((el) => el.category === e.name);
      this.element.insertBefore(
        new CardCategorie(e.name, /*wordcards.length*/ 8).element,
        this.CreateCardCategorie.element,
      );
    });
    // });
    // this.CreateCardCategorie.createcat();


  }

  StartWords(name: string): void {
    const arr = getCards();
    arr.then((data) => {
      const wordcards = data.filter((el) => el.category.indexOf(name) !== -1);
      this.AddWords(wordcards);
    });
  }

  AddWords(wordcards: Array<Cards>): void {
    this.element.innerHTML = '';
    this.element.appendChild(this.CreateCardWord.element);
    wordcards.forEach((e) => {
      this.element.insertBefore(
        new CardWord(e.word, e.translation, e.audioSrc, e.image, e.category).element,
        this.CreateCardWord.element,
      );
    });
  }

}
