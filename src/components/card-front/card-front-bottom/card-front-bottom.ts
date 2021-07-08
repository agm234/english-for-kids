import { BaseComponent } from '../../base-component';
import './card-front-bottom.scss';

export class CardFrontBottom extends BaseComponent {
  constructor(name: string, none: string) {
    super('div', ['card_front_bottom', `${none}`]);
    this.element.innerHTML = `
        <p class="card_name_bottom">${name}</p>
         `;
  }
}
