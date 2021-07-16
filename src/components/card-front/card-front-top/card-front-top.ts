import { BaseComponent } from '../../base-component';
import './card-front-top.scss';

export class CardFrontTop extends BaseComponent {
  constructor(image: string, mode: string) {
    super('div', ['card_front_top', `${mode}`]);
    this.element.style.backgroundImage = `url('../../${image}')`;
  }
}
