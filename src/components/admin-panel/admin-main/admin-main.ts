import { BaseComponent } from '../../base-component';
import { getCategories, getCards, Cards } from '../../../Api';
import { CardCategorie } from './admin-categorie/admin-categorie';
import { CreateCardCategorie } from './create-categorie/create-categorie';
import { CardWord } from './admin-word/admin-word';
import { CreateCardWord } from './create-word/create-word';
import './admin-main.scss';

interface Category {
  name: string;
  image: string;
  page: string;
}
export class AdminMain extends BaseComponent {
  private readonly CreateCardCategorie: CreateCardCategorie;

  private readonly CreateCardWord: CreateCardWord;

  constructor() {
    super('div', ['admin_main']);
    this.startCategories();
    this.CreateCardCategorie = new CreateCardCategorie();
    this.CreateCardWord = new CreateCardWord();
  }

  startCategories(): void {
    const arr = getCategories();
    arr.then((data) => {
      this.addCategories(data);
    });
  }

  async addCategories(card: Array<Category>): Promise<void> {
    this.element.appendChild(this.CreateCardCategorie.element);
    card.forEach((e) => {
      const arr = getCards();
      arr.then(async (data) => {
        const wordcards = data.filter((el) => el.category === e.name);
        this.element.insertBefore(
          new CardCategorie(e.name, wordcards.length).element,
          this.CreateCardCategorie.element,
        );
      });
    });
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
