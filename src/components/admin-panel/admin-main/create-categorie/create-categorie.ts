import { BaseComponent } from '../../../base-component';
import './create-categorie.scss';

export class CreateCardCategorie extends BaseComponent {
  constructor() {
    super('div', ['create_categorie']);
    this.CreateCatItem();
  }

  CreateCatItem(): void {
    this.element.innerHTML = `
    <div class="create_categorie_header">
    <h2 class="create_categorie_header_text">Create new Category</h2>
    </div>
    <div class="create_categorie_main">
    <img class="create_categorie_main_img" 
    src="https://res.cloudinary.com/dnddbsls8/image/upload/v1626271925/english-for-kids/images/add_categorie_ac9lqp.png" 
    data-imgcreatecat="createcat" alt="close">
    </div>
    `;
  }
}
