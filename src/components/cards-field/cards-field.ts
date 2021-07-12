import { BaseComponent } from '../base-component';
import { CardMain } from '../card-main/card-main';
import { CardCat } from '../card-category/card-category';
import { WrapperHeader } from '../wrapper_header/wrapper_header';
import './cards-field.scss';

interface CardsMain {
  name: string;
  image: string;
  page: string;
}
interface CardsCat {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

export class CardsField extends BaseComponent {
  private check: string;

  private mode: string;

  private none: string;

  private none1: string;

  public sounds: Array<string>;

  private readonly WrapperHeader: WrapperHeader;

  constructor() {
    super('div', ['cards_field']);
    this.WrapperHeader = new WrapperHeader();
    this.sounds = [];
    this.check = '';
    this.start();
    this.mode = '';
    this.none = '';
    this.none1 = '';
  }

  async start(): Promise<void> {
    const res = await fetch('./images.json');
    const cards: CardsMain[] = await res.json();
    const card = cards.map((name) => name);
    this.AddCard(card);
  }

  AddCard(card: Array<CardsMain>): void {
    if ((document.querySelector('input') as HTMLInputElement).hasAttribute('cheacked')) {
      this.check = 'red';
    } else {
      this.check = 'green';
    }
    card.forEach((e) => {
      this.element.appendChild(new CardMain(e.name, e.page, e.image, this.check).element);
    });
  }

  async startCat(cat: string): Promise<void> {
    const res1 = await fetch('./cards.json');
    const cards1 = await res1.json();
    const index = cards1[0].indexOf(cat);
    const cards2: Array<CardsCat> = cards1[index + 1];
    this.AddCardCat(cards2);
  }

  AddCardCat(card: Array<CardsCat>): void {
    this.sounds = [];
    card.forEach((e) => {
      this.sounds.push(e.audioSrc);
    });
    if ((document.querySelector('input') as HTMLInputElement).hasAttribute('cheacked')) {
      this.mode = 'game';
      this.none = 'none';
      this.none1 = 'display1';
    } else {
      this.mode = 'train';
      this.none = 'display';
      this.none1 = 'none1';
    }
    card.forEach((e) => {
      this.element.appendChild(
        new CardCat(e.image, e.word, e.translation, e.audioSrc, this.mode, this.none, this.none1).element,
      );
    });
  }

  getIndex(): number {
    const index = Math.floor(Math.random() * this.sounds.length);
    return index;
  }

  PlaySounds(index: number): void {
    const audio = new Audio(this.sounds[index]);
    audio.play();
  }

  tablecolor(): void {
    if (this.element.children[0].classList.contains('table_wrapper')) {
      (this.element.children[0].lastChild as HTMLElement).classList.toggle('table_red');
    }
  }
}
