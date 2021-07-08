import { BaseComponent } from '../../base-component';
import './card-back-top.scss';

export class CardBackTop extends BaseComponent {
  constructor(image: string) {
    super('div', ['card_back_top']);
    this.element.style.backgroundImage = `url('../../${image}')`;
  }
}
