import { BaseComponent } from '../base-component';
import { CardFrontTop } from './card-front-top/card-front-top';
import { CardFrontBottom } from './card-front-bottom/card-front-bottom';
import { getCardByName, updateCard } from '../../Api';
import './card-front.scss';

export class CardFront extends BaseComponent {
  private readonly CardFrontTop: CardFrontTop;

  private readonly CardFrontBottom: CardFrontBottom;

  public readonly audio: HTMLAudioElement;

  constructor(image: string, name: string, audio: string, mode: string, none: string) {
    super('div', ['card_front']);
    this.CardFrontTop = new CardFrontTop(image, mode);
    this.element.appendChild(this.CardFrontTop.element);
    this.element.setAttribute('word', name);
    this.CardFrontBottom = new CardFrontBottom(name, none);
    this.element.appendChild(this.CardFrontBottom.element);
    this.audio = new Audio(audio);
    this.media();
  }

  media(): void {
    this.element.addEventListener('click', () => {
      const card = getCardByName(this.element.getAttribute('word') as string);
      card.then((data) => {
        data[0].clicks += 1;
        updateCard(data[0]);
      });
      this.audio.play();
    });
  }
}
