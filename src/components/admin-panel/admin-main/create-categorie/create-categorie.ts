import { BaseComponent } from '../../../base-component';
import { createCategorie } from '../../../../Api';
import { CreateCardCategorieForm } from './create-cat-form/create-cat-form';
import { AdminMain } from '../admin-main';
import './create-categorie.scss';

export class CreateCardCategorie extends BaseComponent {
  constructor() {
    super('div', ['create_categorie']);
    this.CreateCatItem();
  }
  CreateCatItem() {
    this.element.innerHTML = `
    <div class="create_categorie_header">
    <h2 class="create_categorie_header_text">Create new Category</h2>
    </div>
    <div class="create_categorie_main">
    <img class="create_categorie_main_img" src="../../images/add_categorie.png" data-imgcreatecat="createcat" alt="close">
    </div>
    `;
  }

}
