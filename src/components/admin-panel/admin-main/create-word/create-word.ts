import { BaseComponent } from '../../../base-component';
import './create-word.scss';

export class CreateCardWord extends BaseComponent {
  constructor() {
    super('div', ['create_word']);
    this.element.innerHTML = `
        <div class="create_word_header">
        <h2 class="create_word_header_text">Create new Category</h2>
        </div>
        <div class="create_word_main">
        <img class="create_word_main_img" src="../../images/add_categorie.png" alt="close">
        </div>
        `;
  }
}
