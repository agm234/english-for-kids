import { BaseComponent } from '../base-component';
import { CardBackTop } from './card-back-top/card-back-top';
import { CardBackBottom } from './card-back-bottom/card-back-bottom';
import './card-back.scss';

export class CardBack extends BaseComponent {
  private readonly CardBackTop: CardBackTop;

  private readonly CardBackBottom: CardBackBottom;

  constructor(image: string, translation: string) {
    super('div', ['card_back']);
    this.CardBackTop = new CardBackTop(image);
    this.element.appendChild(this.CardBackTop.element);
    this.CardBackBottom = new CardBackBottom(translation);
    this.element.appendChild(this.CardBackBottom.element);
  }
}
