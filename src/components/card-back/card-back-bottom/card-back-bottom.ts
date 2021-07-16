import { BaseComponent } from '../../base-component';
import './card-back-bottom.scss';

export class CardBackBottom extends BaseComponent {
  constructor(translation: string) {
    super('div', ['card_back_bottom']);
    this.element.innerHTML = `
        <p class="card_name_bottom">${translation}</p>
         `;
  }
}
