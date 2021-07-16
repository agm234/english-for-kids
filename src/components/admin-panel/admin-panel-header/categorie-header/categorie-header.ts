import { BaseComponent } from '../../../base-component';
import './categorie-header.scss';

export class AdminCategories extends BaseComponent {
  constructor() {
    super('div', ['categories_header', 'active_rout']);
    this.element.innerHTML = `
        <p class="word_header " data-word="categorie">Categories</p>
        `;
  }
}
