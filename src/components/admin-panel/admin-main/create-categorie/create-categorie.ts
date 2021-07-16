import { BaseComponent } from '../../../base-component';
import './create-categorie.scss';

export class CreateCardCategorie extends BaseComponent {
  constructor() {
    super('div', ['create_categorie']);
    this.element.innerHTML = `
        <div class="create_categorie_header">
        <h2 class="create_categorie_header_text">Create new Category</h2>
        </div>
        <div class="create_categorie_main">
        <img class="create_categorie_main_img" src="../../images/add_categorie.png" alt="close">
        </div>
        `;
  }
}
