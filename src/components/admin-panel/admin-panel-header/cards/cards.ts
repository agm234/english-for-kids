import { BaseComponent } from '../../../base-component';
import './cards.scss';

export class AdminCards extends BaseComponent {
  constructor() {
    super('div', ['admin_cards']);
    this.element.innerHTML = `
        <p class="word_header">Words</p>
        `;
  }
}
